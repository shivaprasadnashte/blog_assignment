import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn = async (request: NextRequest): Promise<boolean> => {
  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    return false;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/getuserdetail`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    const data = await response.json();
    return !!data;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const loggedIn = await isLoggedIn(request);

  if (!loggedIn && pathname === "/addblog") {
    return NextResponse.redirect(new URL("/signup", request.url));
  }
  if (!loggedIn && pathname === "/home") {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  if (loggedIn && pathname === "/signup") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/addblog", "/home"], // Include other routes you want to match
};

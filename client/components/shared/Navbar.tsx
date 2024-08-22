import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
      <nav className=" flex justify-between w-full items-center">
        <Link href="/" className="text-lg sm:text-3xl font-bold hover:underline underline-offset-4" prefetch={false}>
          Blog
        </Link>
        <div className="ml-auto flex gap-2 sm:gap-6">
          <Link
            href="/signup"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Log in
          </Link>

          <Link
            href="/home"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/addblog"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Add Blog
          </Link>
          <Link
            href="/about-us"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

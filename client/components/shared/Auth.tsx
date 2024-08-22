"use client";
import { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Auth() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [authMode, setAuthMode] = useState("login");
  const [otpSent, setOtpSent] = useState(false);
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [loginData, seiLoginData] = useState({
    username: "",
    password: "",
  });
  const [verifyOtp, setVerifyOtp] = useState<number | undefined>();
  const [verifyOtpsend, setVerifyOtpsend] = useState<number | undefined>();
  const [email, setEmail] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>("");
  const [otp, setOtp] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleForgotPasswordClick = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/users/forgotpassword`, {
        email: forgotPasswordEmail,
      });
      const data = response.data;
      setOtpSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOtpVerifyClick = async () => {
    try {
      const response = await axios.post(`${API_URL}/users/verifyuser`, {
        email: forgotPasswordEmail,
        otp: verifyOtpsend,
      });
      const data = response.data;
      setAuthMode("resetPassword");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignupClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupData.email || !signupData.username || !signupData.password) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/users/register`, {
        username: signupData.username,
        email: signupData.email,
        password: signupData.password,
      });
      const data = response.data;
      setEmail(signupData.email);
      setSignupData({ email: "", username: "", password: "" });
      alert("Signup successful! You can now log in.");
      setAuthMode("verifyEmail");
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Signup failed:", axiosError);
      if (
        axiosError.response &&
        axiosError.response.data &&
        // @ts-ignore
        axiosError.response?.data?.message
      ) {
        // @ts-ignore
        alert(`Signup failed: ${axiosError.response.data.message}`);
      } else {
        alert("Signup failed: An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleVerifyEmailClick = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, "email");

    try {
      const response = await axios.post(`${API_URL}/users/verifyuser`, {
        email: email,
        otp: verifyOtp,
      });
      const data = response.data;
      setAuthMode("login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        email: loginData.username,
        password: loginData.password,
      });

      const data = response.data;
      const token = data.token;

      if (token) {
        Cookies.set("authToken", token, { expires: 7 });
        axios.defaults.headers.common["Authorization"] = token;
        alert("Login successful!");
        router.push("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (resetPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const response = await axios.put(`${API_URL}/users/resetpassword`, {
        email: forgotPasswordEmail,
        password: resetPassword,
      });
      const data = response.data;
      setAuthMode("login");
    } catch (error) {
      console.error(error);
    }
  };

  const renderForm = () => {
    switch (authMode) {
      case "login":
        return (
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Login
            </h1>
            <p className="text-primary-foreground md:text-xl">
              Sign in to access your account and blog.
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  onChange={(e) => {
                    seiLoginData({ ...loginData, username: e.target.value });
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    seiLoginData({ ...loginData, password: e.target.value });
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md text-black px-6 text-sm font-medium bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
                <div
                  className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
                  onClick={() => {
                    setAuthMode("forgotPassword");
                  }}
                >
                  Forgot Password?
                </div>
              </div>
            </form>
            <p className="text-sm font-medium text-primary-foreground">
              <Link
                href="#"
                className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
                onClick={handleSignupClick}
                prefetch={false}
              >
                Don't have an account
              </Link>
            </p>
          </div>
        );
      case "forgotPassword":
        return (
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Forgot Password
            </h1>
            <p className="text-primary-foreground md:text-xl">
              Enter your email to receive a One-Time Password (OTP).
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="forgotPasswordEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
              </div>
              {!otpSent ? (
                <Button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md text-black px-6 text-sm font-medium bg-white "
                  onClick={handleForgotPasswordClick}
                >
                  Send OTP
                </Button>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="otp">OTP</Label>
                    <Input
                      id="otp"
                      placeholder="Enter the OTP"
                      onChange={(e) => setVerifyOtpsend(Number(e.target.value))}
                    />
                  </div>
                  <Button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-md text-black px-6 text-sm font-medium bg-white transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={handleOtpVerifyClick}
                  >
                    Verify OTP
                  </Button>
                </>
              )}
            </form>
          </div>
        );
      case "resetPassword":
        return (
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Reset Password
            </h1>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your new password"
                  onChange={(e) => setResetPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md text-black px-6 text-sm font-medium bg-white transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                onClick={handleResetPassword}
              >
                Change Password
              </Button>
            </form>
          </div>
        );
      case "signup":
        return (
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Sign Up
            </h1>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={signupData.username}
                  onChange={(e) =>
                    setSignupData({ ...signupData, username: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md text-black px-6 text-sm font-medium bg-white "
                onClick={handleSignupClick}
              >
                Sign Up
              </Button>
            </form>
            <p className="text-sm font-medium text-primary-foreground cursor-pointer ">
              <Link
                href="#"
                className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
                onClick={handleLoginClick}
                prefetch={false}
              >
                Already have an account?
              </Link>
            </p>
          </div>
        );

      case "verifyEmail":
        return (
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Verify Email
            </h1>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label htmlFor="email">OTP</Label>
                <Input
                  id="otp"
                  placeholder="Enter the OTP"
                  value={verifyOtp !== undefined ? verifyOtp : ""}
                  onChange={(e) => setVerifyOtp(Number(e.target.value))}
                />
              </div>
              <Button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md text-black px-6 text-sm font-medium bg-white "
                onClick={handleVerifyEmailClick}
              >
                Sign Up
              </Button>
            </form>
            <p className="text-sm font-medium text-primary-foreground cursor-pointer ">
              <Link
                href="#"
                className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
                onClick={handleLoginClick}
                prefetch={false}
              >
                Already have an account?
              </Link>
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-primary">
        <section className="w-full  py-12 md:py-24 lg:py-10 transition-all duration-500">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              <div className="transition-opacity duration-500 opacity-100">
                {renderForm()}
              </div>
              <img
                src="/auth.jpg"
                width="550"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full transition-opacity duration-500 opacity-100"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

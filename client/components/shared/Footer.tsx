import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Blog</h3>
          <Link href="#" prefetch={false}>
            Latest Posts
          </Link>
          <Link href="#" prefetch={false}>
            Categories
          </Link>
          <Link href="#" prefetch={false}>
            Archives
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">About</h3>
          <Link href="#" prefetch={false}>
            Our Story
          </Link>
          <Link href="#" prefetch={false}>
            Team
          </Link>
          <Link href="#" prefetch={false}>
            Careers
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#" prefetch={false}>
            Tutorials
          </Link>
          <Link href="#" prefetch={false}>
            Webinars
          </Link>
          <Link href="#" prefetch={false}>
            Guides
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" prefetch={false}>
            Cookie Policy
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#" prefetch={false}>
            Email
          </Link>
          <Link href="#" prefetch={false}>
            Twitter
          </Link>
          <Link href="#" prefetch={false}>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

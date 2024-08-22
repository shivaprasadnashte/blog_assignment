/**
 * v0 by Vercel.
 * @see https://v0.dev/t/orgfVJosruL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
   
      <main className="flex-1 bg-primary">
        <section className="w-full py-12 md:py-24 lg:py-10 ">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
                <p className="text-primary-foreground md:text-xl">
                  Get in touch with our team for any inquiries or feedback.
                </p>
                <div className="prose text-primary-foreground">
                  <p>
                    We're here to help! Whether you have a question about our blog, want to collaborate on a project, or
                    simply want to share your thoughts, we'd love to hear from you.
                  </p>
                  <p>
                    You can reach us by email at <a href="#">info@blog.com</a> or by filling out the form below. We'll
                    do our best to respond to your inquiry as soon as possible.
                  </p>
                  <p>If you prefer, you can also connect with us on social media:</p>
                  <div className="flex gap-4 mt-2">
                    <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                      <TwitterIcon className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                      <LinkedinIcon className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                      <InstagramIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} placeholder="Your message" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function PenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
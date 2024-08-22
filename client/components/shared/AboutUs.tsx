
export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-primary">
        <section className="w-full py-12 md:py-24 lg:py-10 ">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  About Us
                </h1>
                <p className="text-primary-foreground md:text-xl">
                  Learn more about our blog and the team behind it.
                </p>
                <div className="prose text-primary-foreground">
                  <p>
                    Welcome to our blog! We are a team of passionate writers and
                    developers who are dedicated to sharing our knowledge and
                    insights with the world. Our mission is to provide our
                    readers with high-quality content that helps them learn,
                    grow, and succeed in their personal and professional lives.
                  </p>
                  <p>
                    Our blog covers a wide range of topics, including
                    technology, business, personal development, and more. We
                    strive to deliver informative and engaging content that is
                    both educational and entertaining. Whether you're looking to
                    learn a new skill, stay up-to-date on the latest industry
                    trends, or simply find inspiration, you've come to the right
                    place.
                  </p>
                  <p>
                    Our team is made up of experienced writers, developers, and
                    subject matter experts who are passionate about their craft.
                    We work tirelessly to ensure that every piece of content we
                    publish is of the highest quality and provides value to our
                    readers.
                  </p>
                  <p>
                    We're excited to have you join us on this journey. Feel free
                    to explore our blog, leave comments, and connect with us on
                    social media. We're always eager to hear from our readers
                    and to learn from your experiences and perspectives.
                  </p>
                </div>
              </div>
              <div className=" pt-2 md:pt-20"> 
                <img
                  src="/aboutua.webp"
                  width="550"
                  height="400"
                  alt="About Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function PenIcon(props: any) {
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
  );
}

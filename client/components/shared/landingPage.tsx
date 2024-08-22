import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Discover the Latest Insights
                </h1>
                <p className="text-primary-foreground md:text-xl">
                  Explore our blog for the latest news, trends, and expert
                  insights in the world of technology and beyond.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-500 "
                  prefetch={false}
                >
                  Explore Blogs
                </Link>
              </div>
              <img
                src="/aboutua.webp"
                width="550"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Our Blog?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Explore the distinctive qualities that make our blog your go-to
                resource for insightful and engaging content.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">In-Depth Articles</h3>
                    <p className="text-muted-foreground">
                      Our blog features well-researched, comprehensive articles
                      that dive deep into topics, providing valuable insights
                      and knowledge.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Engaging Storytelling</h3>
                    <p className="text-muted-foreground">
                      Our blog is crafted to captivate, with stories that
                      resonate, inspire, and connect with readers on a personal
                      level.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Diverse Perspectives</h3>
                    <p className="text-muted-foreground">
                      Our blog offers a range of voices and viewpoints, covering
                      a broad spectrum of topics to cater to a wide audience.
                    </p>
                  </div>
                </CardContent>
              </Card>
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

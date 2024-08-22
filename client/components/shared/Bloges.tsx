
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Latest Blog Posts</h2>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Discover our latest insights and stories.</p>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <FilterIcon className="mr-2 h-4 w-4" />
                Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Web Development</DropdownMenuItem>
              <DropdownMenuItem>Design</DropdownMenuItem>
              <DropdownMenuItem>Serverless</DropdownMenuItem>
              <DropdownMenuItem>Accessibility</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Future of Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the latest trends and technologies shaping the future of web development.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <UserIcon className="mr-2 h-4 w-4" />
              John Doe
              <span className="mx-2">•</span>
              <CalendarIcon className="mr-2 h-4 w-4" />
              May 1, 2023
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Future of Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the latest trends and technologies shaping the future of web development.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <UserIcon className="mr-2 h-4 w-4" />
              John Doe
              <span className="mx-2">•</span>
              <CalendarIcon className="mr-2 h-4 w-4" />
              May 1, 2023
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Future of Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the latest trends and technologies shaping the future of web development.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <UserIcon className="mr-2 h-4 w-4" />
              John Doe
              <span className="mx-2">•</span>
              <CalendarIcon className="mr-2 h-4 w-4" />
              May 1, 2023
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Future of Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the latest trends and technologies shaping the future of web development.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <UserIcon className="mr-2 h-4 w-4" />
              John Doe
              <span className="mx-2">•</span>
              <CalendarIcon className="mr-2 h-4 w-4" />
              May 1, 2023
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Future of Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the latest trends and technologies shaping the future of web development.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <UserIcon className="mr-2 h-4 w-4" />
              John Doe
              <span className="mx-2">•</span>
              <CalendarIcon className="mr-2 h-4 w-4" />
              May 1, 2023
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Future of Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the latest trends and technologies shaping the future of web development.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <UserIcon className="mr-2 h-4 w-4" />
              John Doe
              <span className="mx-2">•</span>
              <CalendarIcon className="mr-2 h-4 w-4" />
              May 1, 2023
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FilterIcon(props:any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
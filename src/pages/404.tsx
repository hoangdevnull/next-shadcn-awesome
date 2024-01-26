import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTE } from '@/types';

export default function Custom404() {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex min-h-[50vh] items-center justify-center px-6 py-12">
        <div>
          <p className="text-main text-sm font-medium">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">We can’t find that page</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="mt-6 flex items-center gap-x-3">
            <button
              onClick={router.back}
              className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>

              <span>Go back</span>
            </button>

            <Link
              href={ROUTE.HOME}
              className="bg-main w-1/2 shrink-0  rounded-lg px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 sm:w-auto"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

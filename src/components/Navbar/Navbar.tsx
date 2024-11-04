"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <nav className="fixed top-0 left-0 w-full shadow-lg z-10 bg-white">
        <div className="px-20 py-4 flex justify-between items-center">
          <Link href="/posts" className="text-blue-700 text-2xl font-black">
            BlogPlatform
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg z-10 bg-white">
      <div className="px-20 py-4 flex justify-between items-center">
        <Link
          href="/posts"
          className="text-blue-700 text-2xl font-black hidden sm:block"
        >
          BlogPlatform
        </Link>

        <div className="flex items-center space-x-4 sm:space-x-8 mr-auto sm:mr-10 sm:ml-auto">
          <Link
            href="/posts"
            className="text-blue-600 hover:text-blue-800 sm:text-base text-sm"
          >
            Posts
          </Link>
          {status === "authenticated" && (
            <Link
              href="/posts/new"
              className="text-blue-600 hover:text-blue-800 sm:text-base text-sm pr-5 sm:pr-0"
            >
              Create Post
            </Link>
          )}
        </div>

        <div className="ml-auto sm:ml-0">
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 sm:text-base text-sm"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 sm:text-base text-sm"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

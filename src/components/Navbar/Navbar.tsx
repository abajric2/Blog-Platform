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
        <Link href="/posts" className="text-blue-700 text-2xl font-black">
          BlogPlatform
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/posts" className="text-blue-600 hover:text-blue-800">
            Posts
          </Link>
          {status === "authenticated" ? (
            <>
              <Link
                href="/posts/new"
                className="text-blue-600 hover:text-blue-800"
              >
                Create Post
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
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

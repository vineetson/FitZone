"use client";
import React from "react";
// import { Link } from "react-scroll";
import NLink from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <div>
      <div className="flex flex-row gap-x-4 py-5">
        <div className=" flex items-center p-2 ">
          <NLink href="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitZone</h1>
          </NLink>
        </div>

        <nav className=" hidden md:flex items-center p-2 gap-5 ">
          {user ? (
            <>
              <img
                src={user.picture}
                alt={user.name}
                className="rounded-full w-[50px] h-[50px]"
              />
              <NLink
                href="/exercise"
                className=" hover:text-brightRed transition-all cursor-pointer"
              >
                Exercises
              </NLink>
              <NLink
                href="/nutrition"
                className=" hover:text-brightRed transition-all cursor-pointer"
              >
                Meal Plans
              </NLink>
              <a href="/api/auth/logout">Logout</a>
            </>
          ) : (
            <>
              <a href="/api/auth/login">Login</a>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./Navbar-Actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link
            href="/"
            className="ml-4 bg-gray-50 flex lg:ml-0 gap-x-2 shadow-black/4 shadow-lg rounded-lg p-2"
          >
            <p className="font-bold text-2xl">Shopzilla</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

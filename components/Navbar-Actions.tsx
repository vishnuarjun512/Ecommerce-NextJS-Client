"use client";
import React, { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {
          router.push(`/cart`);
        }}
        className="flex items-center rounded-full bg-black px-4 py-3"
      >
        <ShoppingBag className="h-4 w-4" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;

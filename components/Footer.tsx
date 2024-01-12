import React from "react";
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-200 ">
      <Container>
        <div className="mx-auto py-10">
          <p className="text-center text-sm text-black">
            &copy; 2023 Shopzilla, Inc. All rights reserverd.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

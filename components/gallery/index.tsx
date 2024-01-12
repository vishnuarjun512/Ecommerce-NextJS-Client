"use client";
import { Product } from "@/types";

import { Tab } from "@headlessui/react";

import React from "react";
import Image from "next/image";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: { _id: string; url: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <GalleryTab key={image._id} image={image.url} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full ">
        {images.map((image) => (
          <Tab.Panel key={image._id}>
            <div className="aspect-square relative h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={image.url}
                alt="image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;

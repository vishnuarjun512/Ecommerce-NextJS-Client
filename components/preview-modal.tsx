"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import React from "react";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import Info from "./Info";

const PreviewModal = () => {
  const previewmodal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal onClose={previewmodal.onClose} open={previewmodal.isOpen}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gapx-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-end-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;

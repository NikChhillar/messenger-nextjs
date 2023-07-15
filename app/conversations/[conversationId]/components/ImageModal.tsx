"use client";

import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <div className="w-8 h-8">
      Image
      {/* <Image className="object-cover" fill alt="Image" src={src} /> */}
    </div>
  );
};

export default ImageModal;

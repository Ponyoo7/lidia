"use client";

import Image from "next/image";
import { useState } from "react";

type ImagePlaceholderProps = {
  label: string;
  note: string;
  variant?: "portrait" | "wide" | "detail";
  className?: string;
  imageSrc?: string;
};

export function ImagePlaceholder({
  label,
  note,
  variant = "wide",
  className = "",
  imageSrc,
}: ImagePlaceholderProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(imageSrc) && !imageFailed;

  return (
    <div
      className={`image-placeholder image-placeholder--${variant}${showImage ? " has-image" : ""} ${className}`}
      role="img"
      aria-label={showImage ? label : `${label}. ${note}`}
    >
      {showImage && imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={className.includes("hero-portrait")}
          sizes="(max-width: 760px) 42vw, 31vw"
          className="placeholder-photo"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <>
          <span className="placeholder-index">LG — ARCHIVO VISUAL</span>
          <span className="placeholder-mark" aria-hidden="true">+</span>
          <span className="placeholder-caption">{note}</span>
        </>
      )}
    </div>
  );
}
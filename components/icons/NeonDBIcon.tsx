import Image from "next/image";
import React from "react";

const NeonDBIcon = () => {
  return (
    <>
      <Image
        src="neondb.svg"
        className="w-12 h-12 object-contain mx-auto mb-3 brightness-50 contrast--150"
        alt="Neon"
      />
    </>
  );
};

export default NeonDBIcon;

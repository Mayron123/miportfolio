"use client";

import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";

function HeaderPage() {

  return (

      <><nav className="flex justify-between items-center w-full  px-4 pt-10 max-w-6xl mx-auto">
      <div className="flex gap-x-3 items-center">
        <Image
          width={200}
          height={200}
          className="w-10 h-10 rounded-full object-cover"
          src="/jo3.png"
          alt="" />

        <div>
          <h4 className="text-xs ">Mayron Valerga</h4>
          <p className="text-[#828282] text-xs">Professional Website Developer</p>
        </div>
      </div>

    </nav><div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div></>
   
  );
}

export default HeaderPage;

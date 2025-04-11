import { useState,  useEffect } from "react";

export const LodiangScreen = () =>{




    return(
        <div className="fixed inset-0 z-50 bg-black txt-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4x1 font-mono font-bold">
                {text} <span className="animate-blink m1-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden "></div>

        </div>
    );
}

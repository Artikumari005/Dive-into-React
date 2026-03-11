import React from "react";
 function Logo({width='100px'}){
    return(
        <div className="flex items-center gap-2">
            <svg width={width} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#f59e0b" stroke="#78350f" strokeWidth="3"/>
                <path d="M30 50 L45 65 L70 35" stroke="#78350f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-bold text-amber-900">MegaBlog</span>
        </div>
    )
 }
 export default Logo;

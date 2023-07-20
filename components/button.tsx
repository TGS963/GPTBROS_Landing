import React, { ButtonHTMLAttributes } from "react";

export const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <div>
            <button className={`bg-purple-500 px-4 py-2 rounded-full text-black transition-all hover:bg-pink-800 ${className}`} {...rest}>{children}</button>
        </div>
    );
}
import React from "react";
import { Button } from "../button";

export const HeroSection = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center w-2/5 h-screen gap-8">
            <p className="text-5xl text-cyan-100 font-light font-mono leading-relaxed break-words">Don{'\''}t let AI make you obsolete</p>
            <p className="text-cyan-500">Join our community of AI geeks </p>
            <div className="flex flex-row gap-4">
                <Button>Discord</Button>
                <Button>Learn More</Button>
            </div>
        </div>
    );
}
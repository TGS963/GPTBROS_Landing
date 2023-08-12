'use client'
import Image from "next/image";
import { useState, useEffect} from "react"

const Carousel = ({list} : {list: any[]}) => {
    const [itemNumber, setItemNumber] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (itemNumber === list.length - 1) {
                setItemNumber(0);
            } else {
                setItemNumber(itemNumber + 1);
            }
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [itemNumber, list])
    return (
        <div className="relative m-4 w-1/3">
            <div className="flex flex-row gap-2 justify-center mb-4 items-center">
                {list.map((_item, index) => {
                    return (
                        <div key={'circle-' + index} className={`w-3 h-3 cursor-pointer rounded-full border border-white ${itemNumber === index && "bg-white"} transition-all duration-500 ease-in-out`} onClick={() => setItemNumber(index)}></div>
                    )
                })}
            </div>
            <div className="relative p-4 h-[480px]">
                <Image fill style={{objectFit:"contain"}} src={list[itemNumber].image} alt="project screenshot" />
            </div>
            <div className="bg-cyan-500 p-4 w-full rounded-md shadow-lg shadow-white absolute bottom-0 right-[60%]">
                <p>{list[itemNumber].title}</p>
                <p>{list[itemNumber].description}</p>
            </div>
        </div>
    )
}

export const ProjectShowcase = () => {
    return (
        <div className="flex flex-row bg-purple-500 w-full justify-evenly m-12 p-12">
            <p className="text-4xl m-10">Project Showcase</p>
            <Carousel list={[
                {
                    title: "Project 1",
                    description: "This is a project",
                    image: "/image/img_bg_1.jpg"
                },
                {
                    title: "Project 2",
                    description: "This is a project",
                    image: "/image/img_bg_2.jpg"
                },
                {
                    title: "Project 3",
                    description: "This is a project",
                    image: "/image/img_bg_3.jpg"
                },
            ]} />
        </div>
    )
}
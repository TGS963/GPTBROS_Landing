    import React from 'react';

    const navButtons = {
        home: 'Home',
        news: 'News',
        tools: 'Tools',
        tutorials: 'Tutorials',
        contact: 'Contact',
    }

    const NavBar = () => {
        return (
            <div className="flex flex-row justify-around bg-transparent items-end text-white my-12 mx-12">
                <div className='text-3xl items-center cursor-pointer font-semibold'>
                    <p className='text-[#905ae7]'>GPT<span className='text-cyan-400'>_BROS</span></p>
                </div>
                <div className='flex flex-row justify-evenly gap-12'>
                    {Object.keys(navButtons).map((value, index) => {
                        return (
                            <div key={index} className='group'>
                                <p className='cursor-pointer transition-all px-2 py-1 hover:text-pink-800'>{navButtons[value as keyof typeof navButtons]}</p>
                                <div className='w-0 group-hover:w-full h-0.5 transition-all bg-white' />
                            </div>
                        );
                    })}
                    <p className='cursor-pointer bg-purple-500 px-2 py-1 rounded-2xl text-black transition-all hover:bg-pink-800'>Login</p>
                </div>
            </div>
        );
    }

    export default NavBar;
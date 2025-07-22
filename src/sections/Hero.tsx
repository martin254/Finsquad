'use client';

import Button from "@/components/Button";
import Challenge from '@/assets/images/ChallengeImage.jpg';
import Finsquadss from '@/assets/images/finsquadss.jpg';
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [LeftDesignScope, LeftDesignAnimate] = useAnimate();
    const [LeftPointerScope, LeftPointerAnimate] = useAnimate();
    const [RightDesignScope, RightDesignAnimate] = useAnimate();
    const [RightPointerScope, RightPointerAnimate] = useAnimate();

    useEffect(() => {
        LeftDesignAnimate([
            [LeftDesignScope.current, { opacity: 1}, {duration : 0.5}],
            [LeftDesignScope.current, {y:0, x:0 }, {duration : 0.5}]
        ]);
        LeftPointerAnimate([
            [LeftPointerScope.current,{ opacity: 1}, {duration : 0.5}],
            [LeftPointerScope.current, {y:0, x:-100 }, {duration : 0.5}],
            [
                LeftPointerScope.current, {x:0, y:[0, 16, 0] }, {duration : 0.5, ease: "easeInOut"},
            ],
        ]);

        RightDesignAnimate([
            [RightDesignScope.current, {opacity : 1}, {duration : 0.5, delay : 1.5}],
            [RightDesignScope.current, {x :0, y:0}, { duration : 0.5}]
        ]);

        RightPointerAnimate([
            [RightPointerScope.current,{ opacity: 1}, {duration : 0.5, delay: 1.5}],
            [RightPointerScope.current, {y:0, x:175 }, {duration : 0.5}],
            [
                RightPointerScope.current, {x:0, y:[0, 16   , 0] }, {duration : 0.5, ease: "easeInOut"},
            ],
        ]);
    }, []);

    return (<section className="py-24 overflow-x-clip" style={{
        cursor: `url(${cursorYouImage.src}), auto`,
    }}
    >
        <div className="container relative">
            <motion.div ref={LeftDesignScope} initial = { {opacity : 0, y:100, x:-100}} drag className="absolute -left-32 top-36 hidden lg:block">
                <Image 
                src = {Finsquadss}
                alt = "App Image"
                draggable = "false"
                width={300}
                height={480} 
                className="rounded-3xl rounded-tl-none"
                />
            </motion.div>

            <motion.div 
            ref={LeftPointerScope} 
            initial = { {opacity : 0, y:100, x:-200}}
            className="absolute left-56 top-96 hidden lg:block"
            >
                <Pointer name="Emma"/>
            </motion.div>

            <motion.div ref={RightDesignScope} initial = {{opacity : 0, x:100, y:100}}  drag className="absolute -right-32 top-36 hidden lg:block">
                <Image 
                src = {Challenge}
                alt = "App Image 2"
                draggable = "false"
                width={300}
                height={480}
                className="rounded-3xl rounded-tl-none"
                />
            </motion.div>

            
            <motion.div ref={RightPointerScope} initial = {{opacity : 0, x:270, y:100}} className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Martin" color="red" />
            </motion.div>

            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    100+ Signups on our app!
                </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">Finance is Better with Friends</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">FinSquad turns personal finance into a social experience with 1v1 challenges, group competitions, and tools that make managing money fun. Join our waitlist to be the first to experience social financial wellness.
            </p>
            
            <div className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
    <input 
        type="email" 
        placeholder="FinSquad.ai" 
        className="bg-transparent px-4 md:flex-1 w-full"
        disabled
    />
    <Button 
        type="button" 
        variant="primary" 
        className="whitespace-nowrap" 
        size="sm"
        onClick={() => window.location.href = 'https://forms.gle/K46pfzi2sCN5Qm4WA'}
    >
        Join Private Beta
    </Button>
</div>

        </div>
    </section>
    );
}



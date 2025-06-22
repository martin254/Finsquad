"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationColumn(props : { 
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;


}){
    const {integrations, className, reverse} = props;
    
    return (
         <motion.div 
         initial = {{
            y: reverse? "-50%" : 0
         }}

         animate = {{
            y: reverse? 0 : "-50%",
         }}
         transition={{
            duration : 15,
            repeat : Infinity,
            ease : "linear",
         }}
         className={twMerge("flex flex-col gap-4 pb-4", className)}
         >
            {Array.from({length:2}).map((_,i)=>(
                <Fragment key={i}>
                     {integrations.map(integration => (
                            <div key={integration.name} className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center justify-center bg-white rounded-xl 
                                            w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
                              <Image 
                                src={integration.icon} 
                                alt={`${integration.name} icon`}
                                className="w-3/5 h-3/5 object-contain"
                              />
                            </div>
                            <h3 className="text-2xl md:text-3xl text-center mt-6">{integration.name}</h3>
                            
                          </div>
                          
                        ))}
                </Fragment>
            ))}
                       
                    </motion.div>
    )
}
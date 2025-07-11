import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";



const features = [
    "Goal Tracking",
    "Bank-Level Security",
    "Smart Alerts",
    "AI Recommendations",
];


export default function Features() {
    return <section id="features" className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                Make Finance <span className="text-lime-400">Fun and Social
                    </span>
                    </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">

                <FeatureCard 
                title="Social Challenges" 
                description="Compete with friends in 1v1 and group saving challenges to make reaching your financial goals fun and motivating."
                className = "md:col-span-2 lg:col-span-1 group"
                >
                    <div className="aspect-video flex items-center justify-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} alt="Avatar 1" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-lime-400 z-30">
                            <Image src={avatar2} alt="Avatar 2" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 z-20">
                            <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                <Image src={avatar4} alt="avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"/>    
                                {Array.from({ length : 3}).map((_, i) => (
                                    <span className="size-1.5 rounded-full bg-white inline-flex" 
                                    key={i}
                                    ></span>
                                ))}
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>

                <FeatureCard 
                title="Financial Insights" 
                description="Get personalized analytics and actionable recommendations to improve your financial health."
                className = "md:col-span-2 lg:col-span-1 group"
                >
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20  group-hover:text-white/10 transition duration-500 text-center">
                            You&apos;ve achieved {" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                <span> incredible </span>
                                <video src="/assets/gif-incredible.mp4" autoPlay loop muted playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"/>
                                </span> {" "}
                                growth this year 
                                </p>
                    </div>
                </FeatureCard>

                

                <FeatureCard 
                
                title="Smart Budgeting" 
                description="Automatically categorize expenses and create personalized budgets that adapt to your spending habits."
                className = "md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                >
                   <div className="aspect-video flex items-center justify-center gap-4">
                    <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">Groceries</Key>
                    <Key className="w-20 outline outline-2 outline-offset-4  outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">Bills</Key>
                    <Key className="w-20 outline outline-2 outline-offset-4  outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">Fun</Key>
                   </div>
                </FeatureCard>
                
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {features.map((feature) => (
                    <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition delay-500 group ">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                        <span className="font-medium md:text-xl">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}

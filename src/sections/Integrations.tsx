import Tag from "@/components/Tag";
import Barclays from "@/assets/images/Barclays.jpg";
import starling from "@/assets/images/Starling.svg";
import HSBC from "@/assets/images/HSBC.png";
import Lloyds from "@/assets/images/Lloyds.png";
import stanchart from "@/assets/images/stanchart.png";
import monzo from "@/assets/images/Monzo.png";
import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
    { name: "Starling", icon: starling},
    { name: "HSBC", icon: HSBC },
    { name: "Standard Chartered", icon: stanchart },
    { name: "Monzo", icon: monzo },
    { name: "Barclays", icon: Barclays },
    { name: "Lloyds Banking Group", icon: Lloyds},
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
    <section className="py-24 overflow-hidden">
        <div className="container">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                <div>
            <Tag>Bank Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">Track multiple <span className="text-lime-400">bank accounts, credit cards and savings</span> to get a birds eye view of your finances. </h2>
            <p className="text-white/50 mt-4 text-lg">FinSquad Seamlessly connects to your bank and allows you to monitor your transactions and budget with your friends and family</p>
            </div>
            <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
           <IntegrationColumn integrations={integrations}/>
           <IntegrationColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex " />
            </div>
            </div>
            </div>
        </div>
    </section>
    );
}

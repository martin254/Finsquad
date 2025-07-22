import Logo from '@/assets/images/FinsquadLogo2.jpg';
import Image from 'next/image';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
                    
                    {/* Logo */}
                    <Image
                        src={Logo}
                        alt="FinSquad Logo"
                        className="h-14 w-auto"
                    />

                    {/* Description */}
                    <p className="text-sm text-gray-400">
                        © 2025 FinSquad Ltd. All Rights Reserved. <br />
                        FinSquad Ltd is registered and incorporated in England and Wales. Companies House number 15941985. <br />
                        FinSquad Ltd is acting as an agent of Finexer LTD, who is authorised by the Financial Conduct Authority under the Payment Services Regulations 2017, firm reference number 925695, as an Authorised Payment Institution to provide account information services and payment initiation services.
                    </p>

                    {/* Footer Links */}
                    <nav className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                        {footerLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}

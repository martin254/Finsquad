import Logo from '@/assets/images/FinsquadLogo2.jpg';
import Image from 'next/image';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8">
                    {/* Logo and Text Group */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xl">
                        <Image
                            src={Logo}
                            alt="FinSquad Logo"
                            className="h-14 w-auto"
                        />
                        <p className="text-sm text-gray-400">
                        © 2025 FinSquad Ltd. All Rights Reserved.
FinSquad Ltd is registered and incorporated in England and Wales. Companies House number 15941985.
FinSquad Ltd is acting as an agent of Finexer LTD, who is authorised by the Financial Conduct Authority under the Payment Services Regulations 2017, firm reference number 925695, as an Authorised Payment Institution to provide account information services and payment initiation services.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <nav className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8">
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

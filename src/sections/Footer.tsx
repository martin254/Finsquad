import Logo from '@/assets/images/FinsquadLogo2.jpg'
import Image from 'next/image';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className='py-16'>
            <div className="container">
                <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                    <div>
                        <Image src= {Logo} alt = "FinSquad Logo" className="h-14 md:h-14 lg:h-14  w-auto "/>
                    </div>
                    <div>
                        <nav className='flex gap-6'>
                            
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client'
import { MainLogo } from "@/components/icons"
import {JoinBtn} from "@/components/join-btn";

const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }

}

export default function Header() {
    return (

            <div className="flex w-full items-center bg-[#7bc5cd] justify-between py-[38px] px-[32px]">
                <nav className="flex w-full items-center font-pixel-primary justify-between h-16">
                    <MainLogo />

                    <div className="hidden md:flex gap-[52px] items-center">
                        <h2 onClick={() => scrollToSection("about")} className="text-white cursor-pointer font-pixel-primary">
                            About Us
                        </h2>
                        <h2 onClick={() => scrollToSection("instruments")}  className="text-white cursor-pointer font-pixel-primary">
                            Instruments
                        </h2>
                        <h2 onClick={() => scrollToSection("profits")}  className="text-white cursor-pointer font-pixel-primary">
                            Profits
                        </h2>
                        <h2 onClick={() => scrollToSection("reviews")}  className="text-white cursor-pointer font-pixel-primary">
                            Reviews
                        </h2>
                    </div>

                    <JoinBtn/>
                </nav>
            </div>
    )
}


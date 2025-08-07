import Image from "next/image";
import dots from "../../public/img/dots.png";
import sand from "../../public/img/sand.png";
import Slider from "@/components/slider";

export const SliderBlock = () => {
    return (
        <div className="flex relative w-full flex-col">
            <div
                className="flex flex-col relative xxl:min-h-screen lg:h-[700px] md:h-[500px] h-[300px] w-full pt-[10px]">
                <Image src={dots}
                       className="sml:flex hidden z-[1] w-[100vw] left-0 right-0 md:top-[-100px] mds:top-[-50px] top-[-30px]"
                       alt="dots"/>
                <Image src={sand}
                       className="absolute z-[2] w-[100vw] md:bottom-[-110px] mds:bottom-[-70px] sml:bottom-[-50px] sm:bottom-[-40px] bottom-[-30px]"
                       alt="sand"/>
            </div>
            <section className="w-full" id="profits">
                <div
                    className="flex flex-col gap-[80px] items-center text-[#4E3B40] font-pixel-secondary md:text-[48px] mds:text-[32px] sml:text-[24px] sm:text-[20px] text-[17px] z-[3] w-full md:min-h-screen h-[700px] bg-[#eafddb]">
                    <div className="flex items-center pt-[70px] flex-col gap-4">
                        <p className="font-pixel-primary text-[16px]">PROFITS</p>
                        <h2 className="md:w-[1100px] mds:w-[700px] sml:w-[500px] sm:w-[450px] w-[330px] text-center">In
                            just 1 year, our 200 members have generated over $5M in
                            revenue - and the alpha keeps coming.</h2>
                    </div>
                    <Slider/>
                </div>
                </section>
        </div>

)
}
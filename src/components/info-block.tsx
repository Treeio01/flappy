import Image from "next/image";
import upperdots from '../../public/img/upperdots.png'
import downdots from '../../public/img/downdots.png'
import {Block} from "@/components/block";

export const InfoBlock = () => {
    return (
        <div className="flex flex-col relative items-center justify-center w-full mt-[300px] md:px-[32px] px-[16px] pb-[102px]">
            <Image className="absolute z-[1] top-[-90px]" src={upperdots} alt="upper"/>
            <div
                className="flex mds:flex-row flex-col mds:gap-3 gap-8 w-full z-[2] bg-[#DBDA96] md:px-[30px] px-[15px] md:pt-[42px] pt-[20px] md:pb-[30px] pb-[25px] border-[3px] border-[#D2AA4F] h-[100%] shadow-pixel">
                <div className="flex w-full sml:gap-3 gap-6 sm:flex-row flex-col">
                    <Block background="bg-dao" title="Founded in March 2024" description="Pioneering the Future of Decentralized Finance from Day One"/>
                    <Block background="bg-5m" title="$5M+ Total Profits" description="Powered by AI Tools, Cross-Chain Strategies, and Community-Driven Execution"/>
                </div>
                <div className="flex w-full sml:gap-3 gap-6 sm:flex-row flex-col">
                    <Block background="bg-twohundr" title="200+ Active Members" description="Pioneering the Future of Decentralized Finance from Day One"/>
                    <Block background="bg-five" title="5+ Professional Callers" description="Guided by Elite Strategists in Solana, Bitcoin, and DeFi Markets"/>
                </div>
            </div>
            <Image className="absolute z-[1] bottom-0" src={downdots} alt="down"/>
        </div>
    )
}
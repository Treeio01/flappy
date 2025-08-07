interface Props {
    className?: string;
    logo?: React.ReactNode;
    title?: string;
}

export const InstrumentBlock:React.FC<Props> = ({className, title, logo}) => {
    return (
        <div className={`flex items-center ${className} flex-col gap-2`}>
            {logo}
            <div className="flex items-center justify-center text-center font-pixel-primary md:w-[120px] mds:w-[90px] sm:w-[80px] w-[45px] shadow-block md:text-[14px] mds:text-[12px] sml:text-[10px] sm:text-[9px] text-[9px] text-white bg-[#0D575F]">{title}</div>
        </div>
    )
}
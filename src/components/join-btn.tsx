import Link from "next/link";

export const JoinBtn = () => {
    return (
        <Link href="https://forms.gle/Qhs5tm5k1iHqRiJf6">
            <button
                className="sml:px-7 px-4 shadow-join cursor-pointer sml:py-3 py-1 bg-[#E06119] border-[4px] font-pixel-secondary border-white text-white">
                JOIN
            </button>
        </Link>
    )
}
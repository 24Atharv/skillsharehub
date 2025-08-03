import { Logo } from "../Icons/logo"

export const Navbar = () => {
    return <div className="p-4">
        <div className="flex gap-20 justify-between">
            <Logo />
            <div className="flex justify-between gap-6">

                <span className="flex items-center gap-3 font-semibold">Browse
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
                <span className="flex items-center gap-2 border text-black border-gray-400 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input className="font-semibold text-gray-600 w-102 outline-none" type="text" placeholder="Search classes, digital products, teachers, and more" />
                </span>
            </div>
            <div className="flex gap-4">
                <button className="px-5 bg-[#FFFFFF] text-[#171717] text-sm rounded-lg">Sign In</button>
                <button className="px-5 bg-[#000000] rounded-lg text-sm text-[#FFFFFF]">Sign Up</button>
            </div>
        </div>
    </div>
}
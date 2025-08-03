import { CourseIcon } from "../Icons/CourseIcon"
import { HomeIcon } from "../Icons/HomeIcon"
import { PurchaseIcon } from "../Icons/Purchases"

export const Sidebar = () => {
    return <div className="w-62 min-h-screen border border-gray-400 border-none bg-[#E8F1FD]">
            <div className="flex gap-2 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span className="text-gray-900 font-semibold ">MAIN MENU</span>
            </div>
            <hr className="flex-grow w-full bg-gray-500" />
            <div className="flex flex-col gap-8 p-6 ml-3">
                <HomeIcon />
                <CourseIcon />
                <PurchaseIcon />
        </div>
    </div>
}

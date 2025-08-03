import { CourseIcon } from "../Icons/CourseIcon"
import { HomeIcon } from "../Icons/HomeIcon"
import { LogoutIcon } from "../Icons/LogoutIcon"
import { MainMenu } from "../Icons/MainMenu"
import { PurchaseIcon } from "../Icons/Purchases"
import { SettingIcon } from "../Icons/SettingIcon"

export const Sidebar = () => {
    return <div className="w-62 min-h-screen border border-gray-400 border-none bg-[#E8F1FD]">
            <div className="flex gap-2 p-8">
                <MainMenu />
            </div>
            <hr className="flex-grow w-full bg-gray-500" />
            <div className="flex flex-col gap-8 p-6 ml-3">
                <HomeIcon />
                <CourseIcon />
                <PurchaseIcon />
                <SettingIcon />
                <LogoutIcon />
        </div>
    </div>
}

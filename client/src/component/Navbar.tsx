import { Logo } from "../Icons/logo"
import { AuthButton } from "../NavbarComponent/AuthButton"
import { BrowseIcon } from "../NavbarComponent/BrowseIcon"
import { InputIcon } from "../NavbarComponent/InputIcon"

export const Navbar = () => {
    return <div className="p-4">
        <div className="flex gap-20 justify-between">
            <Logo />
            <div className="flex justify-between gap-6">
                <BrowseIcon />
                <InputIcon />
            </div>
            <AuthButton />
        </div>
    </div>
}

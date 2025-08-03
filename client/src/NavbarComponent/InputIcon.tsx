export const InputIcon = () => {
    return <span className="flex items-center gap-2 border text-black border-gray-400 p-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input className="font-semibold text-gray-600 w-102 outline-none" type="text" placeholder="Search classes, digital products, teachers, and more" />
    </span>
}

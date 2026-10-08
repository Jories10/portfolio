import NavBar from "./NavBar";

export default function Header(){
    return (
        <header className="flex items-center justify-between h-16 font-display font-800 text-lg tracking-tight text-gray-500 fixed px-8 lg:mx-14 xl:mx-50 z-10 left-0 right-0 top-0">
            <div>
                <button type="button"  className="pointer text-gray-950 text-sm font-bold hover:text-gray-400" aria-label="">Mr.Discipline</button>
            </div>
            <NavBar/>
        </header>
    )
}
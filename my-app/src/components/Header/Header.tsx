import NavBar from "./NavBar";

export default function Header(){
    return (
        <header className="flex items-center justify-between h-16 font-display font-800 text-lg tracking-tight text-gray-500 relative">
            <div>
                <button type="button"  className="pointer text-gray-950 hover:text-gray-400" aria-label="">Mr.Discipline</button>
            </div>
            <NavBar/>
        </header>
    )
}
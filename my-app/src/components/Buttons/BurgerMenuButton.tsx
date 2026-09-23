import React from "react";
import burgerMenuButton from "../../assets/icons/burger-bar.png";
import closeBurgerButton from "../../assets/icons/cross.png";

type burgerMenuButtonTypes = {
    isOpenNav:boolean,
    setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

function BurgerMenuButton({isOpenNav, setIsOpenNav}:burgerMenuButtonTypes){
    const handleClick = ()=>{
        setIsOpenNav(!isOpenNav);
    }
    return(
        <button type="button" aria-label="" className="block sm:hidden cursor-pointer outline-0" onClick={handleClick}>
            <img src={isOpenNav ? closeBurgerButton : burgerMenuButton} alt="Burger Icon" className="w-5"/>
        </button>
    )
}

export default BurgerMenuButton;
import React, { useState } from 'react'
import Image from 'next/image'
import hamburgerIcon from '../../public/assets/hamburger.svg'
import ArrowLeft from '../../public/assets/arrow-left.svg'
import ArrowButton from '../common/ArrowButton'
import MenuLinks from './MenuLinks'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="md:hidden ml-6 mt-6">
        {isMenuOpen ? (
          <ArrowButton
            active={isMenuOpen}
            handleClick={handleClick}
            icon={ArrowLeft}
            alt="hamburger-menu"
            size={20}
          />
        ) : (
          <button onClick={handleClick}>
            <Image
              width={40}
              height={40}
              src={hamburgerIcon}
              alt="hamburger-menu"
            />
          </button>
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <MenuLinks className="flex flex-col items-center" />
        </div>
      )}

      <div className="w-full hidden md:inline-block font-light text-xl my-4">
        <MenuLinks className="flex flex-row items-center justify-evenly" />
      </div>
    </>
  )
}

export default Menu

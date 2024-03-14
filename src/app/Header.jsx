import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <Link href={"/"}>Home</Link>
        <Link href={"/faculty"}>Faculty</Link>
    </header>
)
}

export default Header
import React from 'react'
// import Shopping from "../../public/img/shopping.png"
import { useSelector } from 'react-redux'

function Navbar() {
    const amount = useSelector((store) => store.basket.amount)
  return (
    <>
        <nav className='flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium mb-10 bg-green-200 py-4'>
            <p>Glasses Store</p>
            <p>Home</p>
            <p>Basket
                <span className='text-xs align-top bg-red-500 text-white rounded-full px-2 mx-1'>{amount}</span>
            </p>
        </nav>
    </>
  )
}

export default Navbar
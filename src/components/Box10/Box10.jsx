import React, { useState } from 'react'
import './box10.css'
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Box10 = () => {
    const [icon,setIcon] = useState(false);      
    return (
        <div className='box10'>
            <div className='box10-2'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg" alt="" />
                <h1>Insurance made easy.</h1>
                <p>Buying insurance does not have to be tedious, time- <br /> consuming & confusing. Paytm Insurance removes the <br /> worry of getting insured by making it simple, <br /> convenient & easy-to-understand.</p>
                <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                    <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                    </div>
                </button>
            </div>
            <div className='box10-1'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png" alt="" />
            </div>
        </div>
    )
}

export default Box10
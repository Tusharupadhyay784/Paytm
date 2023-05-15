import React, { useState } from 'react'
import './box11.css'
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Box11 = () => {
    const [icon, setIcon] = useState(false);
    return (
        <div className='box11'>
            <div className='box11-1'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png" alt="" />
            </div>
            <div className='box11-2'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png" alt="" />
                <h1>Get a Personal Loan in <br /> 2 Minutes.</h1>
                <p>Paytm offers India's quickest multi-purpose, hassle-free loan. It <br /> is 100% digital, transparent and paperless.</p>
                <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                    <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Box11
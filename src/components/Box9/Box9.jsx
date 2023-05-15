import React, { useState } from 'react'
import './box9.css'
import {IoIosArrowForward} from 'react-icons/io'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Box9 = () => {
    const [icon,setIcon] = useState(false);
    return (
        <div className='box9'>
            <div className='box9-1'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png" alt="" />
            </div>
            <div className='box9-2'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png" alt="" />
                <h1>Build Long-term <br /> Wealth & Achieve <br /> your Goals.</h1>
                <p>Investing on Paytm Money is transparent, low-cost and <br /> commission-free. Buy stocks & mutual funds that can <br /> help you create wealth & realise your dreams.</p>
                <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                            <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                            </div>
                        </button>
            </div>
        </div>
    )
}

export default Box9
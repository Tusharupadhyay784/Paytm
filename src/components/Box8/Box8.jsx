import React, { useState } from 'react'
import './box8.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
const Box8 = () => {
    const [icon, setIcon] = useState(false);
    return (
        <div className="box8">
            <div className="box_item_8">
                <div className="box_item_8_1">
            <h1>Financial Services by Paytm</h1>
                    <div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png" alt />
                        <h1>India's most sincere <br /> bank.</h1>
                        <p>Paytm Payments Bank offers secure, transparent and <br /> risk-free banking at your fingertips. With instant <br /> account opening, virtual debit card and zero balance <br /> requirements, experience the future of banking today.
                        </p>
                        <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                            <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                            </div>
                        </button>
                    </div>
                </div>
                <div className="box_item_8_2">
                    <img src="https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png" alt />
                </div>
            </div>
        </div>

    )
}

export default Box8
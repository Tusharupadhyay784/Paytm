import React, { useState } from 'react'
import './box6.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
const Box6 = () => {
    const [icon, setIcon] = useState(false);
    return (
        <div className="box6">
            <div className="box_item_6">
                <div className="box_item_6_1">
                    <div>
                        <img src="https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png" alt />
                        {/* <span> UPI Money <br> Transfer </span> */}
                        <h1>Want it? <br />
                            No more waiting for it. </h1>
                        <p>With Paytm Postpaid, your wishlist doesn't have to be <br /> on the waitlist. Shop for the things
                            you want today and <br /> pay for them next month.
                        </p>
                        <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                            <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                            </div>
                        </button>
                    </div>
                </div>
                <div className="box_item_6_2">
                    <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png" alt />
                </div>
            </div>
        </div>

    )
}

export default Box6
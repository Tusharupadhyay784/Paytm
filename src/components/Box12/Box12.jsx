import React, { useState } from 'react'
import './box12.css'
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai'
const Box12 = () => {
    const [icon, setIcon] = useState(false);
    return (
            <div className="box12">
                <h1>Business Services by Paytm</h1>
                <div className="box_item_12">
                    <div className="box_item_12_1">
                        <div>
                            <h1>Accept payments <br /> online with ease</h1>
                            <p>Grow your business with the payment gateway that <br /> powers India’s largest brands and even the Paytm App</p>
                            <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                                <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="box_item_12_2">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png" alt />
                    </div>
                </div>
                <div className="box13">
                <div className="box_item_13">
                    <div className="box_item_13_1">
                        <div>
                            <h1>In-shop payments <br /> powered by Paytm.</h1>
                            <p>Millions of small & big businesses use Paytm to <br /> accept  payments anywhere any time with a wide range of  solutions for all kind of merchants</p>
                            <button id="iconbutton" onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
                                <div> Learn More {!icon ? (<IoIosArrowForward id='react_icon' />) : (<AiOutlineArrowRight id='react_icon' />)}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="box_item_13_2">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/853880/1656675942486.png" alt />
                    </div>
                </div>
            </div>
            </div>

        
    )
}

export default Box12
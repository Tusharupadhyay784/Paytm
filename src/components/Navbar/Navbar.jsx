import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png" alt />
                    </div>
                    <div className="option">
                        <ul>
                            <li>Paytm for Consumer</li>
                            <li>Paytm For Business</li>
                            <li>Investor Relations</li>
                            <li>Company</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="btn">
                        <button className="inside-btn">
                            <span>Sign In</span>
                            <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt />
                        </button>
                    </div>
                </div>
            </nav>
            <p id="single"><strong> No Wallet KYC Required</strong>
                <span id="singleX"> 😊</span>
                <span id="inside_single"> to pay using UPI on Paytm.</span>
                <strong> Learn more.</strong>
            </p>
        </>


    )
}

export default Navbar
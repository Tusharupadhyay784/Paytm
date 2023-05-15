import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import './box14.css'
const Box13 = () => {
  return (
    <div className='box14'>
      <h1>Business Tools to help <br /> your business grow</h1>
      <div className='box14_item'>
        <div className="box14_items">
          <img src="https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png" alt="" />
          <h1>POS Billing <br /> Software</h1>
          <p>Say Hello to Smart Retail Business Mangement</p>
          <button>
            <div className="last"> Learn More
                <ImArrowRight2 className='ticon' />
            </div>
          </button>
        </div>
        <div className="box14_items">
          <img src="https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png" alt="" />
          <h1>Paytm for <br />
            Business App</h1>
          <p>Everything you need to manage your business on your phone</p>
          <button>
            <div className="last"> Learn More
                <ImArrowRight2 className='ticon' />
            </div>
          </button>
        </div>
        <div className="box14_items">
          <img src="https://assetscdn1.paytm.com/images/catalog/view_item/854036/1656568216166.png" alt="" />
          <h1>Advertise on <br />
            Paytm</h1>
          <p>Grow your business by advertising on India’s largest mobile business</p>
          <button>
            <div className="last"> Learn More
                <ImArrowRight2 className='ticon' />
            </div>
          </button>
        </div>
        <div className="box14_items">
          <img src="https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png" alt="" />
          <h1>Business <br />
            Khata</h1>
          <p>Managing Khata made easy</p>
          <button>
            <div className="last"> Learn More
                <ImArrowRight2 className='ticon' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Box13
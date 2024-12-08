import React from 'react'
import './brand.css';
import { goggle, slack, atlassian, dropbox, shopify } from './import';


const Brand = () => {
  return (
    <div>
      <div className='gpt3__brand section__padding'>


        <div>
          <img src={goggle} alt="goggle" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={atlassian} alt="atlassia" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={shopify} alt="shopipy" />
        </div>

      </div>
    </div>
  )
}

export default Brand

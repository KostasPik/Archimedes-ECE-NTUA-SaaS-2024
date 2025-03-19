import React from 'react'
import './NtuaHeader.css'
import PyrforosImage from '../assets/pyrforos.svg'
import ArchimedesImage from '../assets/archimedes2.svg'

export default function NtuaHeader() {
  return (
    <div className='ntua-header'>
      <div className='ntua-logo-header'>
        <img src={ArchimedesImage} alt='Municipality' className='ntua-logo'/>
        <span className="ntua-title"><span className='evreka-top'>Archimedes</span><br/><span className='title-bg'>NTUA</span><br/></span>
      </div>
    </div>
  )
}

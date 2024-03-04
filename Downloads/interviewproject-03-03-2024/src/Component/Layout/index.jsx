import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArrowTopBottom from '../Widgets/ArrowTopBottom';

export default function index({children}) { 
 

  return (
    <div>
        <Header/>
          <div className='main_body'>
              {children}
          </div>
        <Footer/>
        <ArrowTopBottom />
    </div>
  )
}
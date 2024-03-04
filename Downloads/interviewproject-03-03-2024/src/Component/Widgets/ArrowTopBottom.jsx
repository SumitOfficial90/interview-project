import React, {useState} from 'react';
import  { arrowUp } from '../../assets';

export default function ArrowTopBottom() {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='top_bottom fixed bottom-[20px] right-[20px] z-50'>
        <button className='flex justify-center items-center ease-in-out bg-[#4b3ec4] rounded-full border-none hover:bg-gradient-to-r hover:from-[#ff5c41] hover:to-[#ff5c41]'>
            <div className='top_button' data-aos="fade-up" data-aos-duration="2000" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
                <img src={ arrowUp } alt='arrow' className='w-[40px] h-[40px] p-3' />
            </div>
        </button>
    </div>
  )
}


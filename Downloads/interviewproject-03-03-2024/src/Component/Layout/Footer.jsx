import React from 'react'
import { Link } from "react-router-dom";
import  {footerBackground, HeaderLogo} from '../../assets';

export default function Footer() {
  return (
    <footer className="relative bg-cover bg-center bg-no-repeat sm:pt-20  xxs:pt-10" style={{backgroundImage: `url(${ footerBackground })`}}>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:gap-y-0 gap-y-8 xs:text-left xxs:text-center">
          <div className="item">
            <div class="frt-logo xl:mb-[44px] mb-[20px] xl:w-[220px] md:w-[111px]">
              <img src={HeaderLogo} alt="logo" className='xs:ml-0 xxs:m-auto' />
            </div>
            <p className="xl:text-[20px] text-[12px] text-white font-normal xl:leading-[29px] leading-[20px] no-underline mb-[35px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita et nobis totam excepturi! Impedit et perferendis officiis, odit soluta itaque minus magni reprehenderit, vitae ducimus, architecto similique veritatis deleniti inventore.
            </p>
            <Link to="/" className="text-[16px] text-white font-normal rounded-full no-underline bg-[#4b3ec4] py-[8px] px-[30px]">
                Read More
            </Link>
            <ul className="flex mx-0 mb-0 mt-[30px] p-0 list-none items-center xs:justify-start xxs:justify-center">
              <li>
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 35" fill="none">
                    <path d="M24.7408 13.3031H20.0625V10.2348C20.0625 9.08254 20.8262 8.8139 21.3641 8.8139C21.9008 8.8139 24.6656 8.8139 24.6656 8.8139V3.74822L20.1188 3.73047C15.0715 3.73047 13.9229 7.50862 13.9229 9.92641V13.3031H11.0039V18.523H13.9229C13.9229 25.222 13.9229 33.2935 13.9229 33.2935H20.0625C20.0625 33.2935 20.0625 25.1424 20.0625 18.523H24.2054L24.7408 13.3031Z" fill="white"/>
                  </svg>
                </Link>
              </li>
              <li className="mx-[20px]">
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4377 10.6473C26.4478 10.8778 26.4531 11.1106 26.4531 11.3434C26.4531 18.4602 21.0364 26.6665 11.1306 26.6665C8.08875 26.6665 5.25825 25.7753 2.875 24.2467C3.29625 24.2964 3.72506 24.3224 4.16006 24.3224C6.68269 24.3224 9.00463 23.4609 10.8479 22.0166C8.49156 21.9736 6.50269 20.4159 5.81731 18.2771C6.14663 18.3399 6.48363 18.3734 6.83044 18.3734C7.32131 18.3734 7.79769 18.3077 8.24956 18.1844C5.78594 17.6897 3.92956 15.5132 3.92956 12.9041C3.92956 12.8811 3.92956 12.8589 3.92956 12.8359C4.65556 13.2395 5.48644 13.4815 6.3695 13.5099C4.92438 12.5442 3.97325 10.8954 3.97325 9.0268C3.97325 8.04042 4.23894 7.11536 4.70231 6.31961C7.35894 9.57817 11.3266 11.7217 15.8028 11.9469C15.7109 11.5525 15.6635 11.1412 15.6635 10.7192C15.6635 7.7448 18.0751 5.33398 21.0487 5.33398C22.5979 5.33398 23.9971 5.98798 24.9796 7.03492C26.2066 6.79286 27.3591 6.34486 28.3999 5.72761C27.9978 6.98505 27.1438 8.04036 26.0319 8.70736C27.1209 8.57717 28.1594 8.28767 29.1251 7.8588C28.4028 8.93948 27.49 9.88755 26.4377 10.6473Z" fill="white"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 33 33" fill="none">
                    <path d="M3.30812 11.9783H9.10961V29.4368H3.30812V11.9783ZM6.2477 3.5625C4.26209 3.5625 2.96484 4.86606 2.96484 6.57704C2.96484 8.25282 4.22413 9.59428 6.17177 9.59428H6.20877C8.23234 9.59428 9.49253 8.25275 9.49253 6.57704C9.45456 4.86606 8.2324 3.5625 6.2477 3.5625ZM23.3539 11.5682C20.2744 11.5682 18.8948 13.262 18.1251 14.4499V11.9783H12.3219C12.3987 13.6161 12.3219 29.4368 12.3219 29.4368H18.1251V19.6867C18.1251 19.1645 18.1631 18.6443 18.3158 18.2702C18.7359 17.2277 19.6908 16.1482 21.2923 16.1482C23.3936 16.1482 24.2328 17.7499 24.2328 20.0958V29.4368H30.0352V19.4257C30.0352 14.0633 27.1733 11.5682 23.3539 11.5682Z" fill="white"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item md:justify-self-center">
            <h3 className="text-white	font-bold	xl:text-[30px] text-[16px] xxs:text-[20px] xl:mb-[30px] mb-[12px]">Product</h3>
            <ul className="m-0 p-0 list-none sm:block xxs:flex xxs:justify-center xxs:flex-wrap xxs:gap-x-4">
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Men Fashion
              </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">Women Feshion
              </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Child Feshion
              </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Wedding Gift
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Love Combo
                </Link>
              </li>
            </ul>
          </div>
          <div className="item md:justify-self-center">
            <h3 class="text-white	font-bold	xl:text-[30px] text-[16px] xxs:text-[20px] xl:mb-[30px] mb-[12px]">Menu</h3>
            <ul className='sm:block xxs:flex xxs:justify-center xxs:flex-wrap xxs:gap-x-4'>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="item md:justify-self-center">
            <h3 className="text-white	font-bold	xl:text-[30px] text-[16px] xxs:text-[20px] xl:mb-[30px] mb-[12px]">Support</h3>
            <ul className='sm:block xxs:flex xxs:justify-center xxs:flex-wrap xxs:gap-x-4'>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Castomer Support
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[16px] md:text-[14px] xl:text-[20px] text-white font-normal leading-[35px] xl:leading-[47px] no-underline hover:underline">
                  Online Support
                </Link>
              </li>
            </ul>
          </div>
    
        </div>
      </div>
      <div className="bg-black py-[15px] mt-[40px] relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap w-full justify-between items-center sm:flex-row flex-col">
              <p className="mb:mb-0 xl:text-[20px] md:text-[12px] text-white font-normal">
                © 2024 website.
              </p>
              <ul className="m-0 p-0 list-none flex items-center">
                <li className="">
                  <Link to="/" className="xl:text-[20px] md:text-[12px] text-white font-normal no-underline hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li className="text-white mx-2">|</li>
                <li className="">
                  <Link to="/" class="xl:text-[20px] md:text-[12px] text-white font-normal no-underline hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
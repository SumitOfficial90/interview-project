import React, {useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import  {HeaderLogo} from '../../assets';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FcLike } from "react-icons/fc";

export default function Header() {

  const isSticky = () => {
    const header = document.querySelector('.header_bottom');
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
        <div className="header_top bg-[#4b3ec4] z-10	relative">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                    <path d="M23.3221 1.86818C23.3132 1.82499 23.2921 1.78525 23.2614 1.75359C23.2307 1.72194 23.1917 1.6997 23.1488 1.68947C20.2889 0.990249 13.681 3.48195 10.1009 7.06056C9.46237 7.69394 8.88025 8.38176 8.36116 9.11622C7.25716 9.01857 6.15315 9.10011 5.21224 9.51027C2.55745 10.6787 1.7845 13.7276 1.56917 15.0391C1.55695 15.1109 1.56156 15.1845 1.58263 15.2542C1.60369 15.3239 1.64064 15.3878 1.69057 15.4408C1.7405 15.4938 1.80204 15.5345 1.87037 15.5597C1.93869 15.5849 2.01192 15.5939 2.08431 15.586L6.34749 15.1157C6.35053 15.4372 6.36993 15.7582 6.40559 16.0776C6.42705 16.2995 6.52552 16.5068 6.68392 16.6636L8.33479 18.3106C8.49173 18.4687 8.69896 18.5672 8.92073 18.5889C9.23839 18.6244 9.55765 18.6438 9.87727 18.647L9.4095 22.9048C9.4017 22.9772 9.41077 23.0503 9.43599 23.1186C9.46122 23.1869 9.50192 23.2484 9.5549 23.2983C9.60788 23.3482 9.6717 23.3852 9.74135 23.4063C9.81101 23.4274 9.88461 23.432 9.95638 23.4199C11.2655 23.21 14.3197 22.437 15.4813 19.7822C15.8914 18.8413 15.9754 17.7427 15.8807 16.6441C16.6169 16.1249 17.3066 15.5427 17.9417 14.9038C21.533 11.3306 24.0106 4.87013 23.3221 1.86818ZM14.3587 10.6411C14.0308 10.3134 13.8074 9.89579 13.7169 9.44111C13.6263 8.98642 13.6726 8.5151 13.85 8.08674C14.0273 7.65839 14.3277 7.29225 14.7132 7.03465C15.0986 6.77705 15.5518 6.63955 16.0155 6.63955C16.4791 6.63955 16.9323 6.77705 17.3177 7.03465C17.7032 7.29225 18.0036 7.65839 18.1809 8.08674C18.3583 8.5151 18.4046 8.98642 18.3141 9.44111C18.2235 9.89579 18.0001 10.3134 17.6722 10.6411C17.4547 10.8589 17.1965 11.0317 16.9122 11.1495C16.6279 11.2674 16.3232 11.3281 16.0155 11.3281C15.7077 11.3281 15.403 11.2674 15.1187 11.1495C14.8344 11.0317 14.5762 10.8589 14.3587 10.6411Z" fill="white"/>
                    <path d="M8.22266 19.5034C7.95508 19.7715 7.52588 19.876 7.00928 19.9653C5.84863 20.1631 4.82373 19.1602 5.03223 17.9868C5.11182 17.542 5.34717 16.9185 5.49365 16.772C5.52567 16.7406 5.54698 16.6999 5.55456 16.6557C5.56214 16.6115 5.5556 16.566 5.53587 16.5257C5.51614 16.4855 5.48422 16.4524 5.44465 16.4313C5.40508 16.4102 5.35986 16.4021 5.31543 16.4082C4.66639 16.4876 4.06257 16.7819 3.6001 17.2441C2.45215 18.3931 2.34375 22.6563 2.34375 22.6563C2.34375 22.6563 6.60937 22.5479 7.75732 21.3989C8.22102 20.9368 8.51566 20.3321 8.59375 19.6821C8.61182 19.478 8.36328 19.3564 8.22266 19.5034Z" fill="white"/>
                  </svg> 
                  <h4 className="pl-2 xl:text-2xl text-sm font-bold text-white">
                    Say hello to website! <span className="font-normal underline">see what's new </span> 
                  </h4>
            </div>
          </div>
        </div>   
        <div className='header_bottom py-3'>
          <div className="container mx-auto">
            <div className="flex justify-between align-center items-center">
              <div className="logo xl:w-52 lg:w-48 md:w-24">
                <img src={HeaderLogo} alt="" />
              </div>
              <nav className="ml-auto md:mx-auto">
                {isMenuOpen ? (
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden focus:outline-none focus:ring-black focus:border-x-slate-950 dark:focus:border-x-black absolute top-[10px] right-[10px] text-white z-[99] border-none xxs:visible"
                    aria-controls="navbar-default"
                    aria-expanded="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18px" height="18px" fill='#fff'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
                  </button>
                ) : (
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="focus:outline-none focus:ring-white focus:border-white dark:focus:border-x-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:ring-2 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                )}
                <div
                  className={`w-full absolute left-0 right-0 md:relative overflow-hidden z-50 transition-all  md:w-auto ${
                    isMenuOpen ? 'bg-[#141219] h-[100vh] top-0 ' : '  md:h-auto h-0'
                  }`}
                  id="navbar-default"
                >
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 h-[250px] md:h-auto  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                      <Link to="/" onClick={closeMenu} className="block py-2 font-normal px-5 text-base md:text-black xxs:text-white md:bg-transparent md:p-0">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={closeMenu} className="block py-2 font-normal px-5 text-base md:text-black xxs:text-white md:bg-transparent md:p-0">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" onClick={closeMenu} className="block py-2 font-normal px-5 text-base md:text-black xxs:text-white md:bg-transparent md:p-0">
                        products
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={closeMenu} className="block py-2 font-normal px-5 text-base md:text-black xxs:text-white md:bg-transparent md:p-0">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={closeMenu} className="block py-2 font-normal px-5 text-base md:text-black xxs:text-white md:bg-transparent md:p-0">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="flex flex-wrap justify-between items-center gap-4 icon-size">
                <Link to="/">
                  <IoIosNotifications className="w-5 h-5" />
                </Link>
                <Link to="/" >
                  <FcLike className="w-5 h-5" />
                </Link>
                <Link to="/" >
                  <CiShoppingCart className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}
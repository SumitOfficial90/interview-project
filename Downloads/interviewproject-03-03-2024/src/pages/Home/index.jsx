import React from 'react';
import { Layout } from '../../Component';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import  { bannerOne,bannerTwo,bannerThree, catOne,catTwo,catThree,catFour,catFive,catSix,catSeven,catEight, offersOne,offersTwo,offersThree,offersFour, latestOne,latestTwo,latestThree,latestFour,latestFive,latestSix,latestSeven,latestEight, clientBackgroung, clientImgOne, teamTwo, teamone, clientHeart, blogone,blogtwo,blogthree, companyOne,companyTwo,companyThree,companyFour,companyFive,companySix,companySeven,watches } from '../../assets';
import { HomePage } from '../../config';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function index() {

  var firstSlider = {
    infinite:true, 
    speed:500,
    slidesToShow:1, 
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };

  var citiesSlider = {
    infinite:true, 
    speed:500,
    slidesToShow:4, 
    slidesToScroll:1,
    dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  var cliSlider = {
    infinite:true, 
    slidesToShow:1, 
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2000,
    dots: true,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  var blogSlider = {
    infinite:true, 
    speed:500,
    slidesToShow:3, 
    slidesToScroll:1,
    dots: true,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  };

  var companySlider = {
    infinite:true, 
    speed:500,
    slidesToShow:5, 
    slidesToScroll:1,
    dots: false,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
  };

  const data = HomePage;


  const bannerImages = [ bannerOne,bannerTwo,bannerThree ]
  const catagoriesImage = [catOne,catTwo,catThree,catFour,catFive,catSix,catSeven,catEight];
  const Latestimg = [offersOne,offersTwo,offersThree,offersFour,];
  const latestimg = [latestOne,latestTwo,latestThree,latestFour,latestFive,latestSix,latestSeven,latestEight,];
  const clientsImg = [ clientImgOne, teamTwo, teamone ];
  const teamimg = [blogone,blogtwo,blogthree,];
  const companyimg = [companyOne,companyTwo,companyThree,companyFour,companyFive,companySix,companySeven];

  return (
    <Layout>
        
        <section className='banner bg-[#f7f7f7] pt-12 pb-16'>
            <Slider  {...firstSlider}>
                {data?.BannerPart?.BannerSlider.map((items, i) => {
                    return (
                        <div data={items} key={i} className='item'>
                            <div className='container'>
                                <div className='grid sm:grid-cols-2 xxs:grid-cols-1'>
                                    <div className='flex items-center sm:text-left xxs:text-center'>
                                        <div className='text'>
                                            <h2 className='font-medium pb-5 text-base text-black'>
                                                {items.Heading}
                                            </h2>
                                            <h1 className='font-bold pb-5 text-4xl text-black'>
                                                Do it with fashion <br></br> or not at all.
                                            </h1>
                                            <p className='font-medium pb-8 text-base text-[#212121] max-w-[450px]'>
                                                {items.Paragrahy}
                                            </p>
                                            <Link to="/" className="text-[16px] text-white font-normal rounded-full no-underline bg-[#4b3ec4] py-[8px] px-[30px] inline-block">
                                                Shop now
                                            </Link>
                                        </div>
                                    </div>   
                                    <div className='banner_img sm:pt-0 xxs:pt-6'>
                                        <img src={bannerImages[(i)]} alt=''/>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section>

        <section className='catagories pt-[70px]'>
            <div className='container'>
                <div className='same_heading' data-aos="fade-up" data-aos-duration="3000">
                    <h2 className='font-bold pb-3 text-3xl text-black text-center'>
                        {data.cataHeading.Heading}
                    </h2>
                    <span className='w-[100px] h-[1px] relative block bg-[#4b3ec4] mt-3 mx-auto'></span>
                </div>
                <div className='pt-6 grid xl:grid-cols-8 sm:grid-cols-4 xxs:grid-cols-2 gap-2' data-aos="fade-up" data-aos-duration="2000">
                    {data?.cataPart?.cataData.map((items, i) => {
                        return (
                            <Link to='/' data={items} key={i}>
                                <div className='w-[120px] h-[120px] m-auto border-solid border border-[#fff] rounded-full ease-linear p-1 hover:border-[#4b3ec4]'>
                                    <div className='w-full h-full rounded-full bg-[#dfdfdf] flex justify-center items-center'>
                                        <img src={catagoriesImage[(i)]} alt='catagories-image' className='object-cover' />
                                    </div>
                                </div>
                                <div className='pt-2'>
                                    <h4 className='font-bold text-sm text-black text-center'>
                                        {items?.Heading}
                                    </h4>
                                </div>
                            </Link>
                        )
                    })}        
                </div>
            </div>
        </section>

        <section className='offers pt-[70px]'>
            <div className='container'>
                <div className='same_heading' data-aos="fade-up" data-aos-duration="3000">
                    <h2 className='font-bold pb-3 text-3xl text-black text-center'>
                        {data.offersHeading.Heading}
                    </h2>
                    <span className='w-[100px] h-[1px] relative block bg-[#4b3ec4] mt-3 mx-auto'></span>
                </div>
                <div className='pt-6 pb-6 grid xl:grid-cols-4 lg:grid-cols-4 gap-2 sm:grid-cols-2 xs:grid-cols-1' data-aos="fade-up" data-aos-duration="2000">
                    {data?.offersPart?.offersData.map((items, i) => {
                        return (
                            <div data={items} key={i} className='item p-2'>
                                <Link to="/" className='p-2 border-solid border border-slate-200 rounded block ease-linear hover:border-[#4b3ec4]'>
                                    <div className='h-[220px] p-4'>
                                        <img src={Latestimg[(i)]} alt='offers-product' className='m-auto xl:w-auto lg:h-full block sm:w-auto xxs:h-full' />
                                    </div>
                                    <div className='pt-2'>
                                        <h4 className='font-bold pb-1 text-lg text-black'>
                                            {items?.Heading}
                                        </h4>
                                        <h6 className='font-bold pb-3 text-lg text-black'>
                                            {items?.Price}
                                        </h6>
                                        <Link to="/" className="text-[14px] bg-[#4b3ec4] text-white rounded-sm py-1 px-4 font-normal inline-block">
                                            Order Now
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className='offers_banner pt-[70px]'>
            <div className='container'>
                <div className='grid sm:grid-cols-4 xxs:grid-cols-2 gap-2 bg-[#32333b] rounded-lg'>
                    <div className='p-[20px]'>
                        <h3 className='font-medium pb-6 text-base text-[#65fdf4]'>
                            PRE ORDER
                            <br></br>
                            <span className='font-normal text-sm text-white'>BE THE FIRST TO OWN</span>
                        </h3>
                        <h4 className='font-medium pb-6 text-sm text-white'>From $399</h4>
                    </div>
                    <div className='flex justify-center items-end'>
                        <img src={watches} alt='image' className='w-full h-full xxs:h-auto' />
                    </div>
                    <div className='p-[20px]'>
                        <h3 className='font-medium pb-6 text-sm text-[#65fdf4]'>
                            Opplo Watch Sport 
                            <br></br>
                            <span> Series 8</span>
                        </h3>
                        <h4 className='font-medium text-sm text-white text-[24px]'> A healthy leap ahead </h4>
                    </div>
                    <div className='flex items-center justify-end p-[20px] xxs:pl-[0px]'>
                        <Link to="/" className="text-[16px] bg-white text-black rounded-full py-2 px-6 font-medium inline-block xxs:px-4 xxs:py-1">
                            Discover More
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className='latest_product pt-[70px] pb-[90px]'>
            <div className='container'>
                <div className='same_heading' data-aos="fade-up" data-aos-duration="3000">
                    <h2 className='font-bold pb-3 text-3xl text-black text-center'>
                        {data.latestHeading.Heading}
                    </h2>
                    <span className='w-[100px] h-[1px] relative block bg-[#4b3ec4] mt-3 mx-auto'></span>
                </div>
                <div className='pt-6 pb-6' data-aos="fade-up" data-aos-duration="2000">
                    <Slider  {...citiesSlider}>
                        {data?.latestPart?.latestSlider.map((items, i) => {
                            return (
                                <div data={items} key={i} className='item p-2'>
                                    <Link to="/" className='p-2 border-solid border border-slate-200 rounded block ease-linear hover:border-[#4b3ec4]'>
                                        <div className='h-[220px] p-6'>
                                            <img src={latestimg[(i)]} alt='' className='m-auto w-full h-full block sm:w-auto' />
                                        </div>
                                        <div className='pt-4'>
                                            <h4 className='font-bold pb-1 text-xl text-black'>
                                                {items?.Heading}
                                            </h4>
                                            <h6 className='font-bold pb-3 text-base text-black'>
                                                {items?.SubHeading}
                                            </h6>
                                            <Link to="/" className="text-[14px] bg-[#4b3ec4] text-white rounded-sm py-1 px-4 font-normal inline-block">
                                                Add Cart...
                                            </Link>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}        
                    </Slider>
                </div>
            </div>
        </section>

        <section className='client py-[70px] relative bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${ clientBackgroung })`}}>
            <div className='container'>
                <div className='same_heading relative z-10' data-aos="fade-up" data-aos-duration="3000">
                    <h2 className='font-bold pb-3 text-3xl text-white text-center'>
                        {data.clientHeading.Heading}
                    </h2>
                    <span className='w-[100px] h-[1px] relative block bg-[#fff] mt-3 mx-auto'></span>
                </div>
                <div className='pt-6 pb-6 relative z-10 max-w-[700px] m-auto' data-aos="fade-up" data-aos-duration="2000">
                    <Slider  {...cliSlider}>
                        {data?.clientPart?.clientSlider.map((items, i) => {
                            return (
                                <div data={items} key={i} className='item'>
                                    <div className='itembox'>
                                        <div className='w-[130px] h-[130px] m-auto rounded-full mb-5'>
                                            <img src={clientsImg[(i)]} alt='client-image' className='w-[100%] h-[100%] rounded-full object-cover'/>
                                        </div>
                                        
                                        <div className='relative mt-[-40px] w-[50px] h-[50px] m-auto'>
                                            <div className='m-auto relative bg-white w-[50px] h-[50px] rounded-full rounded-bl-none rotate-[-45deg]'></div>
                                            <img className='absolute w-auto top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]' src={clientHeart} alt=''/>
                                        </div>

                                        <div className='p-8 mt-6 bg-[#ffffff1a] rounded-md text-center'>
                                            <h6 className='font-medium pb-6 text-base text-white'>
                                                {items?.paragraphy}
                                            </h6>
                                            <h5 className='font-bold pb-3 text-2xl text-white'>
                                                {items?.Name}
                                            </h5>
                                            <ul className='flex justify-center'>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fc3" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fc3" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fc3" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fc3" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fc3" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </section>

        <section className='blog pt-[70px]'>
            <div className='container'>
                <div className='same_heading' data-aos="fade-up" data-aos-duration="2000">
                    <h2 className='font-bold pb-3 text-3xl text-black text-center'>
                        {data.blogHeading.Heading}
                    </h2>
                    <span className='w-[100px] h-[1px] relative block bg-[#4b3ec4] mt-3 mx-auto'></span>
                </div>
                <div className='pt-6 pb-6' data-aos="fade-up" data-aos-duration="2000">
                    <Slider  {...blogSlider}>
                        {data?.blogPart?.blogSlider.map((items, i) => {
                            return (
                                <div data={items} key={i} className='item p-2'>
                                    <div className='p-2 border-solid border border-slate-200 rounded'>
                                        <div className='h-[220px]'>
                                            <img src={teamimg[(i)]} alt='blog-image' className='w-[100%] h-[100%] object-cover' />
                                        </div>
                                        <div className='pt-4 pb-4'>
                                            <p></p>
                                            <h3 className='font-bold pb-3 text-2xl text-black'>
                                                {items?.SubHeading}
                                            </h3>
                                            <p className='font-medium pb-8 text-base text-[#212121]'>
                                                {items?.paragraph}
                                            </p>
                                            <Link to="/" className="text-[16px] text-[#4b3ec4] font-normal">
                                                Read More....
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}        
                    </Slider>
                </div>
            </div>
        </section>

        <section className='company pt-[70px]'>
            <div className='container'>
                <div className='same_heading' data-aos="fade-up" data-aos-duration="2000">
                    <h2 className='font-bold pb-3 text-3xl text-black text-center'>
                        {data.CompanyHeading.Heading}
                    </h2>
                    <span className='w-[100px] h-[1px] relative block bg-[#4b3ec4] mt-3 mx-auto'></span>
                </div>
                <div className='pt-6 pb-6' data-aos="fade-up" data-aos-duration="2000">
                    <Slider  {...companySlider}>
                        {data?.companyPart?.companySlider.map((items, i) => {
                            return (
                                <div data={items} key={i} className='item'>
                                    <div className='pl-2 pr-2'>
                                        <img src={companyimg[(i)]} alt='company-logo' className='m-auto' />
                                    </div>
                                </div>
                            )
                        })}        
                    </Slider>
                </div>
            </div>
        </section>

    </Layout>
  );
}
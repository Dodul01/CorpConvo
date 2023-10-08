import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/8BqJPmb/alexandre-pellaes-6v-Ajp0psc-X0-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold"> Choose <span className='text-red-500'>CorpConvo</span> for Your <br /> Next Corporate Event</h1>
                <p className="mb-5 text-lg max-w-md mx-auto">Elevate Your Corporate Events with CorpConvo! We Deliver Excellence in Event Management.</p>
                <Link to="/register" className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/Yffs9gB/headway-F2-KRf-Qf-Cqw-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold">Join the <br /><span className='text-red-500'>CorpConvo</span> Experience</h1>
                <p className="mb-5 max-w-md text-center text-lg">Step into the World of Extraordinary Corporate Events  Join the CorpConvo Experience Today!</p>
                <Link to="/register" className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/SRDkH5L/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Elevate Your <br /> <span className='text-red-500'>Corporate</span> Events</h1>
                <p className="mb-5 max-w-md text-center text-lg">Take Your Corporate Events to New Heights with CorpConvo Where Excellence Meets Innovation!</p>
                <Link to="/register" className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[90vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/ypwsNjh/evangeline-shaw-Ci-O3e-BBxq-JA-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Where <span className='text-red-500'>Ideas</span> Gather Event Magic</h1>
                <p className="mb-5 max-w-lg text-lg mx-auto">Gather and Transform Your Event Ideas into Magical Realities with CorpConvo The Pinnacle of Event Management.</p>
                <Link to="/register" className="btn bg-red-600 border-none text-white outline-none hover:bg-red-500">Join Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner

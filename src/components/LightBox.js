import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Close from '../images/icon-close.svg';

export default function LightBox(props) {
    const invert = () => {
      props.setLightBox(!props.lightBox);
    };
  
    return (
      <div className={`lg:absolute lg:h-full lg:w-full lg:z-40 ${props.lightBox ? '' : 'lg:hidden'}`}>
        <div className="lg:opacity-50 lg:bg-black lg:h-screen lg:w-full"></div>
  
        <div className='lg:absolute lg:top-20 lg:right-10 max-lg:hidden'>
          <button onClick={invert}>
            <img src={Close} className='lg:h-10 lg:w-10' />
          </button>
        </div>
  
        <Carousel
          className='lg:absolute lg:w-1/3 lg:z-50 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white border-none rounded-full p-3 cursor-pointer z-10 w-10 h-10 flex items-center"
              >
                <img src={props.ArrowLeft} alt="Previous" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white border-none rounded-full p-3 cursor-pointer z-10 w-10 h-10 flex items-center"
              >
                <img src={props.ArrowRight} alt="Next" />
              </button>
            )
          }
        >
          {props.sneakersImg.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={`Product ${item.id}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
  





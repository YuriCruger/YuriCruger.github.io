import React, { useState } from 'react'
import Thumbnail from './Thumbnail';


//Sneakers Thumbnail
import Product1T from '../images/image-product-1-thumbnail.jpg'
import Product2T from '../images/image-product-2-thumbnail.jpg'
import Product3T from '../images/image-product-3-thumbnail.jpg'
import Product4T from '../images/image-product-4-thumbnail.jpg'


//Icons
import IconMinus from '../images/icon-minus.svg'
import IconPlus from '../images/icon-plus.svg'
import Cart from '../images/icon-cart.svg'



export default function Main(props) {
    const [selectedImage, setSelectedImage] = useState(props.sneakersImg[0].image);

    const openLightBox = () => {
        props.setLightBox(!props.lightBox);
    }

    const addToCart = () => {
        if (props.value > 0) {
            const item = {
                name: 'Fall Limited Edition Sneakers',
                price: 125.00,
                quantity: props.value,
            };

            props.setCart([...props.cart, item]);
        }
    };

    return (
        <main className='flex flex-col lg:flex-row mb-10 lg:mx-32 lg:items-center lg:justify-center lg:mt-6 lg:gap-16 xl:mx-52 '>
            
            <div className='relative max-lg:hidden'>

                {selectedImage && (
                    <div className='lg:rounded-md lg:overflow-hidden'>
                        <img
                            src={selectedImage}
                            className='cursor-pointer'
                            alt={`Selected Sneaker`}
                            onClick={openLightBox}
                        />
                    </div>
                )}

                <div className='lg:flex lg:gap-2 lg:mt-4 max-lg:hidden'>
                    {props.sneakersImg.map((item, index) => (
                        <Thumbnail
                            key={item.id}
                            src={item.image}
                            alt={`Thumbnail ${index + 1}`}
                            isSelected={selectedImage === item.image}
                            onClick={() => { setSelectedImage(item.image); }}
                        />
                    ))}
                </div>

            </div>

            <div className='flex flex-col gap-4 mx-6 mt-4 mb-10 lg:gap-2 lg:mt-0 lg:mb-0 lg:mx-0 2xl:gap-10'>
                <span className='text-orange-400 font-medium lg:text-lg lg:text-xl'>
                    SNEAKER COMPANY
                </span>
                <h1 className='font-bold text-2xl lg:text-4xl xl:text-5xl'>
                    Fall Limited Edition <br /> Sneakers
                </h1>
                <p className='text-gray-500'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className='flex lg:flex-col lg:gap-2'>

                    <div className='flex items-center'>
                        <span className='mr-4 font-bold text-2xl'>
                            $125.00
                        </span>
                        <span className='bg-orange-100 text-orange-500 flex items-center justify-center px-2 rounded-md font-semibold'>
                            50%
                        </span>
                    </div>

                    <span className='ml-auto lg:ml-0 line-through text-gray-500'>
                        $250.00
                    </span>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row'>

                    <div className='bg-gray-200 rounded-md shadow-md flex py-4 justify-between items-center px-4 lg:w-1/3'>
                        <button>
                            <img src={IconMinus} onClick={props.decrementValue} className='w-4 h-1 cursor-pointer' />
                        </button>
                        <span className='font-bold'>
                            {props.value}
                        </span>
                        <button>
                            <img src={IconPlus} onClick={props.incrementValue} className='w-4 h-4 cursor-pointer' />
                        </button>
                    </div>

                    <button
                        className='flex shadow-md shadow-orange-500 items-center justify-center text-white gap-2 py-4 w-full bg-orange-500 rounded-md font-bold lg:w-2/3 hover:bg-orange-400 transition duration-300 ease-in-out'
                        onClick={addToCart}
                    >
                        <img src={Cart} className="filter brightness-0 invert" />
                        Add to cart
                    </button>

                </div>

            </div>
        </main>
    )
}


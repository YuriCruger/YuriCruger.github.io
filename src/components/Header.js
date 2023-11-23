import React, { useState, useEffect, useRef } from 'react';
import Logo from '../images/logo.svg';
import Menu from '../images/icon-menu.svg';
import Cart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';
import Close from '../images/icon-close.svg';
import Product1 from '../images/image-product-1-thumbnail.jpg';
import Delete from '../images/icon-delete.svg';

export default function Header(props) {
  const [menu, setMenu] = useState(false);
  const [cartView, setCartView] = useState(false);
  const menuContentRef = useRef(null);
  const cartContentRef = useRef(null);

  const closeMenuBar = () => {
    setMenu(false);
  };

  const showCart = () => {
    setCartView(!cartView);
  };

  const totalQuantity = props.cart.reduce((total, item) => total + item.quantity, 0);
  
  const totalValue = (125.00 * totalQuantity).toFixed(2);


  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuContentRef.current && !menuContentRef.current.contains(event.target)) {
        closeMenuBar();
      }
    };

    const handleClickOutsideCart = (event) => {
      if (cartContentRef.current && !cartContentRef.current.contains(event.target)) {
        setCartView(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideMenu);
    document.addEventListener('mousedown', handleClickOutsideCart);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
      document.removeEventListener('mousedown', handleClickOutsideCart);
    };
  }, [menuContentRef, cartContentRef]);

  return (
    <div>
      <div className='bg-white flex items-center justify-between py-10 mx-6 lg:h-20 lg:border-b-2 lg:justify-normal lg:py-2 lg:mx-32 xl:mx-52'>
        <div className='flex gap-4 lg:mr-16'>
          <img src={Menu} onClick={() => setMenu(true)} className='h-5 lg:hidden' />
          <img src={Logo} className='h-5 lg:h-8' />
        </div>

        <div
          className={`absolute bg-black bg-opacity-50 left-0 top-0 h-full w-full flex flex-col lg:relative lg:block lg:bg-white lg:bg-opacity-100  lg:w-fit lg:relative lg:items-center ${
            menu ? 'z-40' : 'hidden'
          }`}
        >
          <div ref={menuContentRef} className='bg-white h-full w-2/3 top-0 py-10 px-6 ease-linear lg:white lg:py-0 lg:flex lg:items-center lg:px-0'>
            <button>
              <img src={Close} onClick={closeMenuBar} className='h-4 w-4 mb-10 lg:hidden' />
            </button>
            <div className='flex flex-col gap-4 lg:gap-6 lg:flex-row lg:items-center'>
              <a className='font-bold lg:text-gray-500 cursor-pointer transition duration-300 easy-in-out lg:font-normal lg:hover:text-black lg:hover:border-b-4 lg:hover:border-orange-500 lg:flex lg:items-center'>Collections</a>
              <a className='font-bold lg:text-gray-500 cursor-pointer transition duration-300 easy-in-out lg:font-normal lg:hover:text-black lg:hover:border-b-4 lg:hover:border-orange-500 lg:flex lg:items-center'>Men</a>
              <a className='font-bold lg:text-gray-500 cursor-pointer transition duration-300 easy-in-out lg:font-normal lg:hover:text-black lg:hover:border-b-4 lg:hover:border-orange-500 lg:flex lg:items-center'>Women</a>
              <a className='font-bold lg:text-gray-500 cursor-pointer transition duration-300 easy-in-out lg:font-normal lg:hover:text-black lg:hover:border-b-4 lg:hover:border-orange-500 lg:flex lg:items-center'>About</a>
              <a className='font-bold lg:text-gray-500 cursor-pointer transition duration-300 easy-in-out lg:font-normal lg:hover:text-black lg:hover:border-b-4 lg:hover:border-orange-500 lg:flex lg:items-center'>Contact</a>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4 lg:gap-10 lg:ml-auto relative'>
          <img src={Cart} onClick={showCart} className='h-6 cursor-pointer' />
          <div className={`absolute bg-orange-500 rounded h-4 w-4 flex items-center justify-center top-0 left-3 ${props.cart.length === 0 ? 'hidden' : ''}`}>
            <span className='text-white text-xs'>{totalQuantity}</span>
          </div>
          <img
            src={Avatar}
            className='h-8 lg:h-10 cursor-pointer hover:ring-2 hover:ring-orange-500 hover:rounded-full hover:transition duration-300 easy-in-out'
          />
        </div>
      </div>

      <div
        ref={cartContentRef}
        className={`absolute bg-white shadow-2xl rounded-md py-4 divide-y-[1px] divide-gray-300 left-6 right-6 top-32 z-40 lg:top-16 lg:w-80 lg:left-auto lg:right-32 xl:right-52 ${cartView ? '' : 'hidden'}`}
      >
        <div className='font-bold px-6 mb-6'>
          <span>Cart</span>
        </div>

        <div className={`font-bold text-gray-500 h-60 flex items-center justify-center ${props.cart.length === 0 ? '' : 'hidden'}`}>
          <span>Your cart is empty.</span>
        </div>

        <div className={`py-4 px-6 h-60 flex flex-col justify-center ${props.cart.length >= 1 ? '' : 'hidden'}`}>
          <div className='flex gap-4 items-center'>
            <div>
              <img src={Product1} className='h-14 w-14 rounded-md' />
            </div>
            <div>
              <p className='text-gray-500'>Fall Limited Edition Sneakers</p>
              <div className='flex gap-1'>
                <span className='text-gray-500'>$125.00</span>
                <span id='items' className='text-gray-500 tracking-widest'>
                  x {totalQuantity}
                </span>
                <span className='font-bold'>${totalValue}</span>
              </div>
            </div>
            <div className='ml-auto'>
              <button>
                <img src={Delete} onClick={props.deleteCart} />
              </button>
            </div>
          </div>
          <button className='bg-orange-500 text-white font-semibold rounded-md py-4 w-full mt-4 hover:bg-orange-400 transition duration-300 ease-in-out'>Checkout</button>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react'
//Components
import Header from './components/Header'
import Main from './components/Main'
import LightBox from './components/LightBox';
//Icons
import ArrowLeft from './images/icon-previous.svg'
import ArrowRight from './images/icon-next.svg'
//Sneakers 
import Product1 from './images/image-product-1.jpg'
import Product2 from './images/image-product-2.jpg'
import Product3 from './images/image-product-3.jpg'
import Product4 from './images/image-product-4.jpg'

const sneakersImg = [
  { id: '1', image: Product1 },
  { id: '2', image: Product2 },
  { id: '3', image: Product3 },
  { id: '4', image: Product4 },
];

function App() {
  const [cart, setCart] = useState([])
  const [value, setValue] = useState(0);
  const [lightBox, setLightBox] = useState(false)


  const incrementValue = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const deleteCart = () => {
    setCart([])
  }

  return (
    <div className="relative">
      <Header
        cart={cart}
        value={value}
        deleteCart={deleteCart} />

        <LightBox
        ArrowLeft={ArrowLeft}
        ArrowRight={ArrowRight}
        sneakersImg={sneakersImg}
        lightBox={lightBox}
        setLightBox={setLightBox}
      />
      
      <Main
        sneakersImg={sneakersImg}
        lightBox={lightBox}
        setLightBox={setLightBox}
        value={value}
        setValue={setValue}
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        cart={cart}
        setCart={setCart} />
    </div>
  );
}

export default App;

import React from 'react';

const Thumbnail = (props) => {
  const handleClick = () => {
    props.onClick(props.src);
  };

  return (
    <button
      className={`lg:rounded-md cursor-pointer ${
        props.isSelected ? 'lg:border-solid lg:border-2 lg:border-orange-500 lg:opacity-60' : ''
      }`}
      onClick={handleClick}
    >
      <img
        src={props.src}
        className='lg:w-16 lg:h-16 lg:rounded-md lg:hover:opacity-60 xl:w-20 xl:h-20 xl:w-28 xl:h-28'
        alt={props.alt}
      />
    </button>
  );
};

export default Thumbnail;


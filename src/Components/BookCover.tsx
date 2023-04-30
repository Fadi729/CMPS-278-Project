import React from 'react';
import { Link } from 'react-router-dom';

interface BookCoverProps {
  id: string;
  image: string | null;
  title: string;
  rating: number;
  price: null | number;
  // id: number | string;
}

const BookCover: React.FC<BookCoverProps> = ({ id,image, title, rating, price}) => {
  const displayPrice = price === null ? "Free" : `USD ${price}`;

  return (
    <div className=' inline-block'>
      <Link to={`/book/${id}`}>
        <div className='w-44 h-80 m-1 hover:bg-[#E4E4E4] cursor-pointer relative active:bg-[#DCDCDC]'>
          <div className='absolute left-0 right-0' >
          <div className='mx-auto flex justify-center'>
            <img src={image?image:"https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg"} alt="" />
          </div>
          <div className='mx-auto flex ml-1 mt-2'>
            <p className='font-light text-sm'>{title}</p>
          </div>
          <div className='flex mx-auto font-light text-sm ml-1'>
            <div className='ml-1'>
              {rating.toFixed(1)}  
              <i className="material-icons ml-1 absolute bottom-1" style={{fontSize: '1em',color: '#5F6368'}}>star</i>
            </div>
            <div className='mr-1 ml-7' style={{color: '#5F6368'}}>
              {displayPrice}  
            </div> 
          </div>
          </div>
          
        </div>
      </Link>
    </div>
  )
}

export default BookCover;

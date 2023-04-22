import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import BookCover from '../Components/BookCover'
import { Link } from 'react-router-dom';

function BooksScroll() {
    const slideLeft = (): void => {
        const slider = document.getElementById('slider') as HTMLDivElement;
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = (): void => {
        const slider = document.getElementById('slider') as HTMLElement;
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    
	return (
		<div className='relative left-16 top-24 border flex items-center w-[90%]'>
      <MdChevronLeft size={40} className=' my-auto flex-shrink-0' onClick={slideLeft}/>
      <div className='flex-row flex my-6 w-full h-full overflow-x-scroll scroll  scroll-smooth 'id='slider' >
       <BookCover 
       id='jh23in'
        image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
        title="Overwatch: New Blood" 
        rating={3.8} 
        price="20.99" 
        />

      <BookCover 
        id='ksd89'
        image='https://books.google.com/books/publisher/content/images/frontcover/IC1wDwAAQBAJ?fife=w256-h256'
        title="Stranger Things Ashcan" 
        rating={4.5} 
        price="Free"
        />

      <BookCover 
        id='wmb12'
        image='https://books.google.com/books/content/images/frontcover/FY_HWAcm10MC?fife=w256-h256'
        title="Ready Player One" 
        rating={4.9} 
        price="4.99"
        />

      <BookCover 
        id='if2112'
        image='https://books.google.com/books/publisher/content/images/frontcover/BL_QAwAAQBAJ?fife=w256-h256'
        title="The Memoirs of Scherlock Holmes" 
        rating={3.2} 
        price="10.99"
        />

      <BookCover 
        id='op23'
        image='https://books.google.com/books/publisher/content/images/frontcover/IC1wDwAAQBAJ?fife=w256-h256'
        title="Stranger Things Ashcan" 
        rating={4.5} 
        price="Free"
        />

      <BookCover 
        id='lqlq1212'
        image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
        title="Overwatch: New Blood" 
        rating={3.8} 
        price="20.99" 
        />
      <BookCover 
        id='mnx987'
        image='https://books.google.com/books/content/images/frontcover/FY_HWAcm10MC?fife=w256-h256'
        title="Ready Player One" 
        rating={4.9} 
        price="4.99"
        />


      
      </div>
      <MdChevronRight size={40} className=' my-auto flex-shrink-0' onClick={slideRight} />
    </div>
	);
}

export default BooksScroll;
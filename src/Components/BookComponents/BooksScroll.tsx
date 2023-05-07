import React, { useMemo } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import BookCover from "../BookComponents/BookCover"
import { Link } from 'react-router-dom';
import { BooksReview } from "../../data/Interfaces/Books";

interface Props {
  id: string; // Add a unique ID prop
  books: {
    id           : string;
    title        : string;
    description  : string | null;
    authors      : string[] | null;
    image        : string | null;
    previewLink  : string | null;
    publisher    : string | null;
    publishedDate: string | null;
    infoLink     : string | null;
    categories   : string | null;
    ratingsCount : number | null;
  }[];

  reviews:BooksReview[];
}


const BooksScroll: React.FC<Props> = ({ id, books, reviews }) => {
    const slideLeft = (): void => {
        const slider = document.getElementById(`slider-${id}`) as HTMLDivElement;
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = (): void => {
        const slider = document.getElementById(`slider-${id}`) as HTMLElement;
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    
    // const randomBooks = books.slice(0, 20);
    const sortedBooks = books
    .filter(b => b.id !== null)
    

     // Shuffle the sortedBooks array randomly
     for (let i = sortedBooks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sortedBooks[i], sortedBooks[j]] = [sortedBooks[j], sortedBooks[i]];
  }

    const top20Books = sortedBooks.slice(0, 20);





    const bookList = top20Books.map((book) => {
      const bookReviews = reviews.filter((review) => review.book_Id === book.id);
      const ratingSum = bookReviews.reduce((sum, review) => sum + review.reviewscore, 0);
      const averageRating = ratingSum / bookReviews.length;
      const price = bookReviews.length > 0 ? bookReviews[0].price : null;
  
      return {
        ...book,
        rating: averageRating,
        price: price,
      };
    });

	return (
		<div className='relative left-16 top-24 flex items-center w-[90%] h-[100%]'>
      <MdChevronLeft size={50} className='my-auto flex-shrink-0 border border-gray-400 rounded-full p-2 active:bg-[#E7E7E7] cursor-pointer' onClick={slideLeft}/>

      <div className='flex-row flex my-6 w-full h-full overflow-x-scroll overflow-y-scroll scroll  scroll-smooth 'id={`slider-${id}`} style={{ overflowX: 'hidden', overflowY: 'hidden' }} >

      {bookList.map((book) => (
        <BookCover key={book.id} id={book.id} image={book.image} title={book.title} rating={book.rating} price={book.price} />
      ))}
      
      </div>
      <MdChevronRight size={50} className='my-auto flex-shrink-0 border border-gray-400 rounded-full p-2 active:bg-[#E7E7E7] cursor-pointer' onClick={slideRight} />
    </div>
	);
}

export default BooksScroll;

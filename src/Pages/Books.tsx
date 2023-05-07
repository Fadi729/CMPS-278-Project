
import React, { useEffect, useState } from 'react';
import BooksScroll from '../Components/BookComponents/BooksScroll';
import BooksSection from '../Components/BookComponents/BooksSection';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getBooksAsync, getBookReviewsAsync } from '../features/booksSlice';

const Books = () => {
  const { books, bookReviews } = useAppSelector(state => state.Books);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  async function getBooksData() {
    await dispatch(getBooksAsync());
    
  }

  async function getBookReviewsData() {
    await dispatch(getBookReviewsAsync());
    setIsLoading(false);
  }

  useEffect(() => {
    getBooksData();
    getBookReviewsData();
  }, []);

  //joining books and reviews (USD)
  const bookList = books.map((book) => {
    const bookRvws = bookReviews.filter((review) => review.book_Id === book.id);
    const ratingSum = bookRvws.reduce((sum, review) => sum + review.reviewscore, 0);
    const averageRating = ratingSum / bookRvws.length;
    const price = bookRvws.length > 0 ? bookRvws[0].price : null;

    return {
      ...book,
      rating: averageRating,
      price: price,
    };
  });

    //joining books and reviews (LBP)
    const bookListLBP = books.map((book) => {
      const bookRvws = bookReviews.filter((review) => review.book_Id === book.id);
      const ratingSum = bookRvws.reduce((sum, review) => sum + review.reviewscore, 0);
      const averageRating = ratingSum / bookRvws.length;
      const price = bookRvws.length > 0 ? (bookRvws[0].price? bookRvws[0].price*100000:null) : null;
  
      return {
        ...book,
        rating: averageRating,
        price: price,
      };
    });

  

  // Top Selling Books
  const topBooks = books
    .filter(b => b.ratingsCount !== null)
    .sort((a, b) => b.ratingsCount! - a.ratingsCount!);


  //Free books
  const freeBooks = bookList.filter(b=> b.price == null )

  //Deals 
  const dealsBooks = bookList.filter(b => b.price != null && b.price < 10);

  //New releases
  const newReleasedBooks = books.filter(b => b.publishedDate !== null)
  .sort((a, b) => {
    const dateA = new Date(a.publishedDate ?? '');
    const dateB = new Date(b.publishedDate ?? '');
    return dateB.getTime() - dateA.getTime();
  })
  .slice(0, 50);




  return (
    <>
      

      {isLoading ? (
        <div className='text-2xl font-google relative left-16 top-24'>Loading...</div>
      ) : (
        <>
          <h1 className='text-2xl font-google relative left-16 top-24'>Browse books</h1>
          <BooksScroll books={books} reviews={bookReviews} id='browse' />

          <h1 className='text-2xl font-google relative left-16 top-24'>Top Selling books</h1>
          <BooksScroll books={topBooks} reviews={bookReviews} id='topselling' />

          <BooksSection books={books} reviews={bookReviews} id='booksection1'/>

          <h1 className='text-2xl font-google relative left-16 top-24'>Newly Released books</h1>
          <BooksScroll books={newReleasedBooks} reviews={bookReviews} id='new' />

          <h1 className='text-2xl font-google relative left-16 top-24'>Free books</h1>
          <BooksScroll books={freeBooks} reviews={bookReviews} id='free' />

          <h1 className='text-2xl font-google relative left-16 top-24'>Deals</h1>
          <BooksScroll books={dealsBooks} reviews={bookReviews} id='deals' />
        </>
      )}
    </>
  );
};

export const books = (state: { Books: { books: any; }; }) => state.Books.books;
export const bookReviews = (state: { Books: { bookReviews: any; }; }) => state.Books.bookReviews;

export default Books;


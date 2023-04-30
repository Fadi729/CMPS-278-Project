// // import React, { useEffect } from 'react'
// // import BooksScroll from '../Components/BooksScroll';
// // import BooksSection from '../Components/BooksSection';
// // import { useAppDispatch, useAppSelector } from '../hooks';
// // import { getBooksAsync } from '../features/booksSlice';




// // const Books = () => {
// //   const {books} = useAppSelector(state => state.Books)
// //   const dispatch = useAppDispatch()
// //   async function getBooksData() {
// //    await dispatch(getBooksAsync())
// //   }
// //   useEffect(()=> {getBooksData()},[])

  

// //   return (
// //     <>
// //     <h1 className='text-2xl font-google relative left-16 top-24'>Top selling books</h1>

// //     {books.map(book => <div key={book.id}>{book.title}</div>)}


// //     <BooksScroll books={books} />
// //     <BooksSection/>


// //     </>
    
// //   )
// // }

// // export default Books

// import React, { useEffect, useState } from 'react';
// import BooksScroll from '../Components/BooksScroll';
// import BooksSection from '../Components/BooksSection';
// import { useAppDispatch, useAppSelector } from '../hooks';
// import { getBooksAsync } from '../features/booksSlice';

// const Books = () => {
//   const { books } = useAppSelector(state => state.Books);
//   const dispatch = useAppDispatch();
//   const [isLoading, setIsLoading] = useState(true);

//   async function getBooksData() {
//     await dispatch(getBooksAsync());
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     getBooksData();
//   }, []);

//   return (
//     <>
      

//       {isLoading ? (
//         <div className='text-2xl font-google relative left-16 top-24'>Loading...</div>
//       ) : (
//         <>
//           <h1 className='text-2xl font-google relative left-16 top-24'>Top selling books</h1>
//           {/* {books.map(book => (
//             <div key={book.id}>{book.title}</div>
//           ))} */}
//           <BooksScroll books={books} />
//           <BooksSection />
//         </>
//       )}
//     </>
//   );
// };

// export default Books;





import React, { useEffect, useState } from 'react';
import BooksScroll from '../Components/BooksScroll';
import BooksSection from '../Components/BooksSection';
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

  return (
    <>
      

      {isLoading ? (
        <div className='text-2xl font-google relative left-16 top-24'>Loading...</div>
      ) : (
        <>
          <h1 className='text-2xl font-google relative left-16 top-24'>Top selling books</h1>
          {/* {books.map(book => (
            <div key={book.id}>{book.title}</div>
          ))} */}
          <BooksScroll books={books} reviews={bookReviews} />
          <BooksSection books={books} reviews={bookReviews}/>
        </>
      )}
    </>
  );
};

export const books = (state: { Books: { books: any; }; }) => state.Books.books;
export const bookReviews = (state: { Books: { bookReviews: any; }; }) => state.Books.bookReviews;

export default Books;


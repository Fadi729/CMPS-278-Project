import React, { useState } from 'react'
import BookElement from './BookElement';
import { BooksReview } from '../data/Interfaces/Books';

interface Props {
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

  const BooksSection: React.FC<Props> = ({ books, reviews }) => {
    const sortedBooks = books
    .filter(b => b.ratingsCount !== null)
    .sort((a, b) => b.ratingsCount! - a.ratingsCount!);

    // Shuffle the sortedBooks array randomly
    for (let i = sortedBooks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sortedBooks[i], sortedBooks[j]] = [sortedBooks[j], sortedBooks[i]];
    }

    const top20Books = sortedBooks.slice(0, 9);

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

    



      const [selectedNavigation, setSelectedNavigation] = useState<string | null>("Top Selling");

      const handleNavigationClick = (navigationName: string) => {
        setSelectedNavigation(navigationName);
      };
    

	return (
		<div className='font-google relative left-16 top-24 mt-6'>
        <h1 className='text-2xl'>Top selling</h1>
        

        {/* <div id='navigation' className='flex flex-wrap mt-6'>
            <div className=' rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mr-2'>
                <span className=' text-[#95989B] text-sm'>Top Selling</span>
            </div>
            <div className=' rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mx-2'>
                <span className=' text-[#95989B] text-sm'>Deals</span>
            </div>
            <div className=' rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mx-2'>
                <span className=' text-[#95989B] text-sm'>New releases in fiction</span>
            </div>
            <div className=' rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mx-2'>
                <span className=' text-[#95989B] text-sm'>New releases in nonfiction</span>
            </div>
            <div className=' rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] ml-2'>
                <span className=' text-[#95989B] text-sm'>Top Free</span>
            </div>
        </div> */}

<div id='navigation' className='flex flex-wrap mt-6'>
      
        <div
        className={`rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mr-2 cursor-pointer ${
            selectedNavigation === 'Top Selling' ? 'bg-[#D6E2E9]' : ''
        }`}
        onClick={() => handleNavigationClick('Top Selling')}
        >
        <span className=' text-[#2A6A94] text-sm'>Top Selling</span>
        </div>


      <div
        className={`rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mx-2 cursor-pointer ${
          selectedNavigation === 'Deals' ? 'bg-[#D6E2E9]' : ''
        }`}
        onClick={() => handleNavigationClick('Deals')}
      >
        <span className=' text-[#2A6A94] text-sm'>Deals</span>
      </div>
      <div
        className={`rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mx-2 cursor-pointer ${
          selectedNavigation === 'New releases in fiction' ? 'bg-[#D6E2E9]' : ''
        }`}
        onClick={() => handleNavigationClick('New releases in fiction')}
      >
        <span className=' text-[#2A6A94] text-sm'>New releases in fiction</span>
      </div>
      <div
        className={`rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] mx-2 cursor-pointer ${
          selectedNavigation === 'New releases in nonfiction' ? 'bg-[#D6E2E9]' : ''
        }`}
        onClick={() => handleNavigationClick('New releases in nonfiction')}
      >
        <span className=' text-[#2A6A94] text-sm'>New releases in nonfiction</span>
      </div>
      <div
        className={`rounded-3xl border px-6 py-1 hover:bg-[#F6F6F6] ml-2 cursor-pointer ${
          selectedNavigation === 'Top Free' ? 'bg-[#D6E2E9]' : ''
        }`}
        onClick={() => handleNavigationClick('Top Free')}
      >
        <span className=' text-[#2A6A94] text-sm'>Top Free</span>
      </div>

      

    </div>

        <div id="elements" className='flex flex-col flex-wrap mt-6 w-[90%] h-[520px] '>
        {selectedNavigation && (
        <>
          {bookList.map((book,index) => (
            <BookElement 
            id={book.id}
            image={book.image?book.image:"https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg"}
            title={book.title} 
            author={book.authors?book.authors:[]}
            category={[book.categories?book.categories.substring(2, book.categories.length - 2):""]}
            rating={book.rating} 
            price={book.price?book.price:""} 
            index={index+1}
            />
             ))}
        </>
      )}
            

        </div>


        </div>
	);
}

export default BooksSection;
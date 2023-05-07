import React, { useState } from 'react'
import BookElement from './BookElement';
import { BooksReview } from '../data/Interfaces/Books';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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

  const BooksSection: React.FC<Props> = ({ books, reviews, id }) => {
    const slideLeft = (): void => {
      const slider = document.getElementById(`slider-${id}`) as HTMLDivElement;
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = (): void => {
      const slider = document.getElementById(`slider-${id}`) as HTMLElement;
      slider.scrollLeft = slider.scrollLeft + 500;
  };
  

    const sortedBooks = books
    .filter(b => b.ratingsCount !== null)
    .sort((a, b) => b.ratingsCount! - a.ratingsCount!);

    // Shuffle the sortedBooks array randomly
    for (let i = sortedBooks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sortedBooks[i], sortedBooks[j]] = [sortedBooks[j], sortedBooks[i]];
    }

    // const top20Books = sortedBooks.slice(0, 9);
    const top20Books = sortedBooks;

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
        <h1 className='text-2xl'>{selectedNavigation}</h1>
        

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
          selectedNavigation === 'New releases in education' ? 'bg-[#D6E2E9]' : ''
        }`}
        onClick={() => handleNavigationClick('New releases in education')}
      >
        <span className=' text-[#2A6A94] text-sm'>New releases in education</span>
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


    <div className="container flex flex-row justify-center align-middle">
    <MdChevronLeft size={50} className='my-auto flex-shrink-0 border border-gray-400 rounded-full p-2 active:bg-[#E7E7E7] cursor-pointer z-10' onClick={slideLeft}/>

{/* <div id="elements" className='flex flex-col flex-wrap mt-6 w-[90%] h-[520px] '> */}
<div className='flex flex-col flex-wrap mt-6 w-[90%] h-[520px] overflow-x-scroll  scroll  scroll-smooth z-0' id={`slider-${id}`} style={{ overflowX: 'hidden', overflowY: 'hidden' }}>




{(() => {
switch (selectedNavigation) {
case "Top Selling":
    return bookList.slice(0,50).map((book,index) => (
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
    ));

case "Deals":
  //joining books and reviews
  const bookJoin = books.map((book) => {
    const bookRvws = reviews.filter((review) => review.book_Id === book.id);
    const ratingSum = bookRvws.reduce((sum, review) => sum + review.reviewscore, 0);
    const averageRating = ratingSum / bookRvws.length;
    const price = bookRvws.length > 0 ? bookRvws[0].price : null;

    return {
      ...book,
      rating: averageRating,
      price: price,
    };
  });
    //Deals 
  const dealsBooks = bookJoin.filter(b => b.price != null && b.price < 10);

  // Shuffle dealsBooks
  for (let i = dealsBooks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dealsBooks[i], dealsBooks[j]] = [dealsBooks[j], dealsBooks[i]];
  }


  return dealsBooks.slice(0,50).map((book,index) => (
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
  ));

case "New releases in fiction":
    //joining books and reviews
    const fictionJoin = books.map((book) => {
      const bookRvws = reviews.filter((review) => review.book_Id === book.id);
      const ratingSum = bookRvws.reduce((sum, review) => sum + review.reviewscore, 0);
      const averageRating = ratingSum / bookRvws.length;
      const price = bookRvws.length > 0 ? bookRvws[0].price : null;

      return {
        ...book,
        rating: averageRating,
        price: price,
      };
    });
    //New releases
    const newReleasedFictionBooks = fictionJoin.filter(b => b.publishedDate !== null && b.categories === "['Fiction']")
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate ?? '');
      const dateB = new Date(b.publishedDate ?? '');
      return dateB.getTime() - dateA.getTime();
    });

  return newReleasedFictionBooks.slice(0,30).map((book,index) => (
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
  ));

  case "New releases in education":
    //joining books and reviews
    const educationJoin = books.map((book) => {
      const bookRvws = reviews.filter((review) => review.book_Id === book.id);
      const ratingSum = bookRvws.reduce((sum, review) => sum + review.reviewscore, 0);
      const averageRating = ratingSum / bookRvws.length;
      const price = bookRvws.length > 0 ? bookRvws[0].price : null;

      return {
        ...book,
        rating: averageRating,
        price: price,
      };
    });
    //New releases
    const newReleasedEducation = educationJoin.filter(b => b.publishedDate !== null && b.categories === "['Education']")
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate ?? '');
      const dateB = new Date(b.publishedDate ?? '');
      return dateB.getTime() - dateA.getTime();
    });

  return newReleasedEducation.slice(0,30).map((book,index) => (
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
  ));

  case "Top Free":

        //Free books
        const freeBooks = bookList.filter(b=> b.price == null )

        // Shuffle freeBooks
      for (let i = freeBooks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [freeBooks[i], freeBooks[j]] = [freeBooks[j], freeBooks[i]];
      }

    return freeBooks.slice(0,40).map((book,index) => (
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
    ));

default:
    return bookList.map((book,index) => (
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
    ));
}
})()}



    

</div>
<MdChevronRight size={50} className='my-auto flex-shrink-0 border border-gray-400 rounded-full p-2 active:bg-[#E7E7E7] cursor-pointer' onClick={slideRight}/>

    </div>
    


        </div>
	);
}

export default BooksSection;
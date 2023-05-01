import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookElement from './BookElement';
import BookReview from './BookReview';
import { books, bookReviews } from '../Pages/Books';
import { useSelector } from 'react-redux';


const BookPage: React.FC = () => {

  const { id } = useParams<{id:string}>();
  const myBooks = useSelector(books);

  const myBookReviews = useSelector(bookReviews);
  const filteredBooks = myBooks.filter((book: { id: string | undefined; }) => book.id === id);
  const moreBooks = myBooks.filter((book: { categories: string | null }) => book.categories === filteredBooks[0].categories);
  const filteredReviews = myBookReviews.filter((review: { book_Id: string | undefined; }) => review.book_Id === id);

  const bookList = moreBooks.map((book: { id: any; }) => {
    const bookReviews = myBookReviews.filter((review: { book_Id: any; }) => review.book_Id === book.id);
    const ratingSum1 = bookReviews.reduce((sum: any, review: { reviewscore: any; }) => sum + review.reviewscore, 0);
    const averageRating1 = ratingSum1 / bookReviews.length;
    const price1 = bookReviews.length > 0 ? bookReviews[0].price : null;

    return {
      ...book,
      rating: averageRating1,
      price: price1,
    };});

  // const date = new Date(`${filteredBooks[0].publishedDate}-01`);
  // const formattedDate = date.toLocaleString('default', { month: 'short', year: 'numeric' });
  const formattedDate = filteredBooks[0].publishedDate;


  const ratings = filteredReviews.reduce((sum: any, review: { reviewscore: any; }) => {
    const rating = review.reviewscore;
    if (rating in sum) {
      sum[rating] += 1;
    } else {
      sum[rating] = 1;
    }
    return sum;
  }, {});
  const r5 = Number(ratings[5])?Number(ratings[5]):0;
  const r4 = Number(ratings[4])?Number(ratings[4]):0;
  const r3 = Number(ratings[3])?Number(ratings[3]):0;
  const r2 = Number(ratings[2])?Number(ratings[2]):0;
  const r1 = Number(ratings[1])?Number(ratings[1]):0;
  const ratingSum = r5+r4+r3+r2+r1;


  const averageRatingSum = filteredReviews.reduce((sum: any, review: { reviewscore: any; }) => sum + review.reviewscore, 0);
  const averageRating = filteredReviews.length > 0 ? (averageRatingSum / filteredReviews.length).toFixed(2) : 0;

  const price = filteredReviews.length > 0 ? filteredReviews[0].price : null;


  function printStars(){
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < Math.round(Number(averageRating))) {
        stars.push(
          <svg
            key={i}
            aria-hidden="true"
            className="w-5 h-5 text-[#0179CA]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Star {i + 1}</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            aria-hidden="true"
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Star {i + 1}</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.025 8.238l-6.865-.61L10 2.076l-2.16 5.552-6.865.61 5.197 4.248-1.654 6.427L10 14.807l5.652 3.106-1.654-6.427 5.197-4.248z"
            ></path>
          </svg>
        );
      }
    }

    return <div className="flex items-center">{stars}</div>;

  }

  function printRatingRatios(){
    const ratings = filteredReviews.reduce((sum: any, review: { reviewscore: any; }) => {
      const rating = review.reviewscore;
      if (rating in sum) {
        sum[rating] += 1;
      } else {
        sum[rating] = 1;
      }
      return sum;
    }, {});
    
    const totalRatings = ratingSum;
    const percentages = {
      5: (ratings[5] / totalRatings) * 100,
      4: (ratings[4] / totalRatings) * 100,
      3: (ratings[3] / totalRatings) * 100,
      2: (ratings[2] / totalRatings) * 100,
      1: (ratings[1] / totalRatings) * 100,
    };


      

return (
  <><div className='flex flex-col'>
    <span className='mx-auto text-[#5F6368] mt-1 text-sm'>5</span>
    <span className='mx-auto text-[#5F6368] mt-1 text-sm'>4</span>
    <span className='mx-auto text-[#5F6368] mt-1 text-sm'>3</span>
    <span className='mx-auto text-[#5F6368] mt-1 text-sm'>2</span>
    <span className='mx-auto text-[#5F6368] mt-1 text-sm'>1</span>
  </div><div className='flex flex-col w-[80%]'>
      <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-2">
        <div className="bg-[#0179CA] h-2.5 rounded-full" style={{ width: `${percentages[5]?percentages[5]:0}%` }}></div>
      </div>

      <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
        <div className="bg-[#0179CA] h-2.5 rounded-full" style={{ width: `${percentages[4]?percentages[4]:0}%` }}></div>
      </div>

      <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
        <div className="bg-[#0179CA] h-2.5 rounded-full" style={{ width: `${percentages[3]?percentages[3]:0}%` }}></div>
      </div>

      <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
        <div className="bg-[#0179CA] h-2.5 rounded-full" style={{ width: `${percentages[2]?percentages[2]:0}%` }}></div>
      </div>

      <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
        <div className="bg-[#0179CA] h-2.5 rounded-full" style={{ width: `${percentages[1]?percentages[1]:0}%` }}></div>
      </div>
    </div></>
);

  }
  

  return (
    <div>
     <div id="main" className='font-google relative left-16 top-24 mt-6 flex'>

      <div id="details" className=' w-[50%]'>
        <h1 className=' text-6xl font-bold'>{filteredBooks[0].title}</h1> 
        {filteredBooks[0].authors.map((author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => (
  <p className=' mt-5 text-[#0379CA] cursor-pointer'>{author}</p>
))}

        <p className=' text-xs text-[#5F6368]'>{formattedDate}</p>
        <div className='mt-7 flex' id='moreInfo'>

          <div id='rating' className='text-sm w-[96px] h-[44px] flex flex-col'>
            <div className='mx-auto'>
            <span className='text-[#202124]'>{averageRating}</span>
            <i className="material-icons ml-1" style={{fontSize: '1em'}}>star</i>
            </div>
            <p className='mx-auto text-[#5F6368] mt-1'>{ratingSum} Reviews</p>

          </div>

          <div id="type" className='text-sm w-[96px] h-[44px] flex flex-col border-l-[1px]'>
            <i className="material-icons mx-auto" style={{fontSize: '1.5em'}}>book</i>
            <p className='mx-auto text-[#5F6368] mt-1'>Ebook</p>
          </div>

          <div id="pages" className=' text-sm w-[96px] h-[44px] flex flex-col border-l-[1px]'>
            <span className='text-[#202124] mx-auto'>{Math.floor(Math.random() * 1400) + 100}</span>
            <p className='mx-auto text-[#5F6368] mt-1'>Pages</p>
          </div>

          <div id="type" className='text-sm w-[96px] h-[44px] flex flex-col border-l-[1px]'>
            <i className="material-icons mx-auto" style={{fontSize: '1.5em'}}>home</i>
            <p className='mx-auto text-[#5F6368] mt-1'>Eligible</p>
          </div>

        </div>

        <div id='buttons' className='mt-8'>
        <button className="bg-[#0379CA] hover:bg-[#094B74] active:bg-[#0C4365] text-white font-bold py-2 px-6 rounded ">
          {price? "USD "+price : "Free" }
        </button>
        <button className="ml-5 bg-transparent hover:bg-[#F7FAFE] text-[#0379CA] active:bg-[#E0EAFC] font-semibold py-2 px-10 border border-[#DADCE0] hover:border-transparent rounded">
          Free Sample
        </button>

        <div id="wishlist" className='w-[146px] h-[48px] hover:bg-[#F7FAFE] inline-block ml-5 cursor-pointer'>
          <i className="material-icons" style={{fontSize: '1.5em'}}>bookmark_add</i>
          <span className='text-[#0379CA] ml-2'>Add to whishlist</span>
        </div>

        </div>
      </div>

        <div id="photo" className='w-[247px] h-[345px] ml-96'>
        <img src={filteredBooks[0].image} alt="" />
        </div>

        
     </div>

     <div className='font-google relative left-16 top-24 mt-6 flex flex-row '>
     <div id="about" className=' w-[65%]'>
          <div>
            <span className='w-full text-lg'>About this book</span>
            <i className="material-icons hover:rounded-full hover:bg-[#F6F6F6] ml-2 cursor-pointer" style={{fontSize: '2em', color:"#5F6368"}}>chevron_right</i>
          </div>
          <p className='mt-5 text-[#5f6368] font-bold'>
           {filteredBooks[0].description}
          </p>
          <button className="bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full mt-5">
          {filteredBooks[0].categories.substring(2, filteredBooks[0].categories.length - 2)}
          </button>


          <div className='mt-10'>
            <span className='w-full text-lg'>Ratings and reviews</span>
            <i className="material-icons hover:rounded-full hover:bg-[#F6F6F6] ml-2 cursor-pointer" style={{fontSize: '2em', color:"#5F6368"}}>chevron_right</i>
          </div>


          <div className='flex justify-between mt-7'>
            <div className='w-20% flex flex-col'>
              <span className='text-6xl mx-auto'>{averageRating}</span>
              

              {printStars()}

              
              <p className='mx-auto text-[#5F6368] mt-1 text-sm'>{ratingSum} Reviews</p>


            </div>

            {printRatingRatios()}
            
          </div>

          {filteredReviews.map((review: any) => (
            <BookReview profile_name={review.profileName} reviewhelpfulness={review.reviewhelpfulness} reviewscore={review.reviewscore} reviewtext={review.reviewtext}  />
      ))}
          

      </div>

      <div className='w-[30%] ml-10'>
        <span className='w-full text-2xl'>Recommended books</span>
        <i className="material-icons hover:rounded-full hover:bg-[#F6F6F6] ml-2 cursor-pointer" style={{fontSize: '2em', color:"#5F6368"}}>chevron_right</i>

      {bookList.map((book: { image: string; title: string; authors: string; categories: string; rating: number; price: string | number; index: React.Key | null | undefined; id: string; }, index: number) => (
        <BookElement
          image={book.image}
          title={book.title}
          author={book.authors}
          category={[book.categories?book.categories.substring(2, book.categories.length - 2):""]}
          rating={book.rating}
          price={book.price}
          index={index+1}
          key={index} 
          id={book.id}        
          />
      ))}

        
      

      </div>
     </div>


      

     <div id="footer">


     </div>
    </div>
  );
};

export default BookPage;

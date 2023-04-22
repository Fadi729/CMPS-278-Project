import React from 'react';
import { useParams } from 'react-router-dom';
import BookElement from './BookElement';
import BookReview from './BookReview';



const BookPage: React.FC = () => {
  const { id } = useParams<{id:string}>();



  return (
    <div>
     <div id="main" className='font-google relative left-16 top-24 mt-6 flex'>

      <div id="details" className=' w-[50%]'>
        <h1 className=' text-6xl font-bold'>A Promised Land {id}</h1> 
        <p className=' mt-5 text-[#0379CA] cursor-pointer'>Barrack Obama</p>
        <p className=' text-xs text-[#5F6368]'>Nov 2020 Crown</p>
        <div className='mt-7 flex' id='moreInfo'>

          <div id='rating' className='text-sm w-[96px] h-[44px] flex flex-col'>
            <div className='mx-auto'>
            <span className='text-[#202124]'>2.9</span>
            <i className="material-icons ml-1" style={{fontSize: '1em'}}>star</i>
            </div>
            <p className='mx-auto text-[#5F6368] mt-1'>550 Reviews</p>

          </div>

          <div id="type" className='text-sm w-[96px] h-[44px] flex flex-col border-l-[1px]'>
            <i className="material-icons mx-auto" style={{fontSize: '1.5em'}}>book</i>
            <p className='mx-auto text-[#5F6368] mt-1'>Ebook</p>
          </div>

          <div id="pages" className=' text-sm w-[96px] h-[44px] flex flex-col border-l-[1px]'>
            <span className='text-[#202124] mx-auto'>768</span>
            <p className='mx-auto text-[#5F6368] mt-1'>Pages</p>
          </div>

          <div id="type" className='text-sm w-[96px] h-[44px] flex flex-col border-l-[1px]'>
            <i className="material-icons mx-auto" style={{fontSize: '1.5em'}}>home</i>
            <p className='mx-auto text-[#5F6368] mt-1'>Eligible</p>
          </div>

        </div>

        <div id='buttons' className='mt-8'>
        <button className="bg-[#0379CA] hover:bg-[#094B74] active:bg-[#0C4365] text-white font-bold py-2 px-6 rounded ">
          USD 20.99
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
        <img src="https://books.google.com/books/publisher/content/images/frontcover/hvr4DwAAQBAJ?fife=w240-h345" alt="" />
        </div>

        
     </div>

     <div className='font-google relative left-16 top-24 mt-6 flex flex-row '>
     <div id="about" className=' w-[65%]'>
          <div>
            <span className='w-full text-lg'>About this book</span>
            <i className="material-icons hover:rounded-full hover:bg-[#F6F6F6] ml-2 cursor-pointer" style={{fontSize: '2em', color:"#5F6368"}}>chevron_right</i>
          </div>
          <p className='mt-5 text-[#5f6368] font-bold'>
            A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy
            
            #1 NEW YORK TIMES BESTSELLER • NAACP IMAGE AWARD NOMINEE • NAMED ONE OF THE TEN BEST BOOKS OF THE YEAR BY THE NEW YORK TIMES BOOK REVIEW
          </p>


          <div className='mt-10'>
            <span className='w-full text-lg'>Ratings and reviews</span>
            <i className="material-icons hover:rounded-full hover:bg-[#F6F6F6] ml-2 cursor-pointer" style={{fontSize: '2em', color:"#5F6368"}}>chevron_right</i>
          </div>


          <div className='flex justify-between mt-7'>
            <div className='w-20% flex flex-col'>
              <span className='text-6xl mx-auto'>2.9</span>
              
              <div className="flex items-center">
                  <svg aria-hidden="true" className="w-5 h-5 text-[#0179CA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-[#0179CA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-[#0179CA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-[#0179CA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-[#E8EAED]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className='mx-auto text-[#5F6368] mt-1 text-sm'>550 Reviews</p>


            </div>

            <div className='flex flex-col'>
            <span className='mx-auto text-[#5F6368] mt-1 text-sm'>5</span>
            <span className='mx-auto text-[#5F6368] mt-1 text-sm'>4</span>
            <span className='mx-auto text-[#5F6368] mt-1 text-sm'>3</span>
            <span className='mx-auto text-[#5F6368] mt-1 text-sm'>2</span>
            <span className='mx-auto text-[#5F6368] mt-1 text-sm'>1</span>
            </div>

            <div className='flex flex-col w-[80%]'>
              <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-2">
                <div className="bg-[#0179CA] h-2.5 rounded-full w-[70%]"></div>
              </div>    

              <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
                  <div className="bg-[#0179CA] h-2.5 rounded-full w-[40%]"></div>
              </div>

              <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
                <div className="bg-[#0179CA] h-2.5 rounded-full w-[40%]"></div>
              </div>

              <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
                  <div className="bg-[#0179CA] h-2.5 rounded-full w-[20%]"></div>
              </div>

                <div className="w-full bg-[#E8EAED] rounded-full h-2.5 mt-4">
                  <div className="bg-[#0179CA] h-2.5 rounded-full w-[10%]"></div>
                </div>
            </div>
            
          </div>

          <BookReview
            profile_name='John Doe'
            reviewhelpfulness={123}
            reviewscore={4}
            reviewtext='Quite simply... an outstanding story teller. How he explains the countless aspects of the job of the President is nothing short of brilliant. Thank you Mr. President, for the thoughtful, honorable, and courageous way that you led our country.' 
          />

          <BookReview
            profile_name='John Doe'
            reviewhelpfulness={123}
            reviewscore={4}
            reviewtext='Quite simply... an outstanding story teller. How he explains the countless aspects of the job of the President is nothing short of brilliant. Thank you Mr. President, for the thoughtful, honorable, and courageous way that you led our country.' 
          />

          <BookReview
            profile_name='John Doe'
            reviewhelpfulness={123}
            reviewscore={4}
            reviewtext='Quite simply... an outstanding story teller. How he explains the countless aspects of the job of the President is nothing short of brilliant. Thank you Mr. President, for the thoughtful, honorable, and courageous way that you led our country.' 
          />
          

      </div>

      <div className='w-[30%] ml-10'>
        <span className='w-full text-2xl'>More books</span>
        <i className="material-icons hover:rounded-full hover:bg-[#F6F6F6] ml-2 cursor-pointer" style={{fontSize: '2em', color:"#5F6368"}}>chevron_right</i>
        <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={3}
            />
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={3}
            />
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={3}
            />
      </div>
     </div>


      

     <div id="footer">


     </div>
    </div>
  );
};

export default BookPage;

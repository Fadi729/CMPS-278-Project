import React from 'react'
import BookElement from './BookElement';


function BooksSection() {
	return (
		<div className='font-google relative left-16 top-24 mt-6'>
        <h1 className='text-2xl'>Top selling</h1>

        <div id='navigation' className='flex flex-wrap mt-6'>
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
        </div>

        <div id="elements" className='flex flex-col flex-wrap mt-6 w-[90%] h-[520px] border'>
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={1}
            />
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={2}
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
            index={4}
            />
             <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={5}
            />
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={6}
            />
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={7}
            />
            <BookElement 
            image="https://books.google.com/books/publisher/content/images/frontcover/L85KEAAAQBAJ?fife=w256-h256" 
            title="Overwatch: New Blood" 
            author='Mark Manson'
            category='Comic'
            rating={3.8} 
            price="20.99" 
            index={8}
            />

        </div>


        </div>
	);
}

export default BooksSection;
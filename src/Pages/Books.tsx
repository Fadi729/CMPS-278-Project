import React, { useEffect } from 'react'
import BooksScroll from '../Components/BooksScroll';
import BooksSection from '../Components/BooksSection';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getBooksAsync } from '../features/booksSlice';




const Books = () => {
  const {books} = useAppSelector(state => state.Books)
  const dispatch = useAppDispatch()
  async function getBooksData() {
   await dispatch(getBooksAsync())
   console.log(books) 
  }
  useEffect(()=> {getBooksData()},[])

  

  return (
    <>
    <h1 className='text-2xl font-google relative left-16 top-24'>Top selling books</h1>
    <BooksScroll />
    <BooksSection/>


    </>
    
  )
}

export default Books


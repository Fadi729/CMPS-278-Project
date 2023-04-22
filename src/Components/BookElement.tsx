import React from 'react'

interface BookElementProps {
  image: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  price: string | number;
  index: number;
}

const BookElement: React.FC<BookElementProps> = ({ image, title,author,category, rating, price,index }) => {
  const displayPrice = price === "Free" ? "Free" : `USD ${price}`; // Conditional statement to display "Free" or "USD {price}"

  return (
    <div className=' inline-block'>
      <div className='w-[360px] h-[140px] m-1 hover:bg-[#E4E4E4] cursor-pointer relative active:bg-[#DCDCDC] flex align-middle rounded-lg'>
        <div className='absolute left-0 right-0 h-full w-[72px] ml-4 mt-7 text-sm'>
            {index}
        </div>
        <div className='flex ml-[40px]' >
            <div className=' my-auto h-[108px] w-[72px]'>
                <img src={image} alt="" />
            </div>
            
            <div className='flex flex-col font-light text-sm ml-4 mt-4'>
                <p className='font-light text-sm'>{title}</p>
                <p className='font-light text-xs'>{author}</p>
                <p className='font-light text-xs text-[#5F6368]'>{category}</p>
                <div className='text-[#5F6368] text-xs'>
                    {rating.toFixed(1)}  
                    <i className="material-icons ml-1 mr-4" style={{fontSize: '1em',color: '#5F6368'}}>star</i>
                    <span style={{color: '#5F6368'}}>
                    {displayPrice}  
                    </span> 
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default BookElement;

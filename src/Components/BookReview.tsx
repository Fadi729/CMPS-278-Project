import React from 'react'

interface BookReviewProps {
  profile_name: string,
  reviewhelpfulness: number,
  reviewscore: number,
  reviewtext: string
}

const BookReview: React.FC<BookReviewProps> = ({profile_name,reviewhelpfulness,reviewscore,reviewtext }) => {
    const generateStars = (score: number) => {
        const stars = []
        for (let i = 0; i < score; i++) {
          stars.push(
            <svg aria-hidden="true" className="w-5 h-5 text-[#0179CA]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Star {i + 1}</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          )
        }
        if(score<5){
            const remainingStars = 5 - score;
            for (let i = 0; i < remainingStars; i++) {
                stars.push(
                  <svg aria-hidden="true" className="w-5 h-5 text-[#E8EAED]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Star {i + score + 1}</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                )
              }

        }
        return stars
      }
      
  return (
    <div className='flex flex-col mt-16'>

        <div className='flex flex-row'>
            {profile_name}
        </div>

        <div className='flex flex-row'>
            <div className="flex items-center mt-3">
                    {generateStars(reviewscore)}
            </div>
        </div>

        <div className='mt-3 text-[#5F6368] text-sm font-thin'>
            {reviewtext}
        </div>

        <div className='mt-3 text-[#5F6368] text-xs font-thin'>
            {reviewhelpfulness} people found this review helpful
        </div>

        <div className='mt-3 text-[#5F6368] text-xs font-thin'>
            <span>Did you find this helpful?</span>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3">
                Yes
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3">
                No
            </button>
        </div>
      
        
    </div>
  )
}

export default BookReview;

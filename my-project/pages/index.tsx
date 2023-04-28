import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenCourses, setIsOpenCourses] = React.useState(false);
  const [isOpenMentoring, setIsOpenMentoring] = React.useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);




  return (
  
    <div className='bg-black'>
      <div className="container mx-auto max-w-7xl">
          <div className="flex flex-row justify-between py-2">
            <div><img src="https://anerdsworld.com/wp-content/uploads/2022/03/anw_logo.png" alt=""  className=' w-32 h-11'/></div>
            <div className=" justify-between hidden md:flex md:flex-row">
                <nav className='' >
                  <ul className='flex flex-row text-sm uppercase font-bold  '>
                    <li className=' text-white hover:text-orange-400 p-4'>about</li>
                    <div className="relative"  onMouseOver={() => {setIsOpen(true); setIsOpenCourses(false); setIsOpenMentoring(false);}} >
                     <li className=' text-white hover:text-orange-400  p-4'  >
                      services
                        <img src="/arrow1.png" alt="" className='bg-white rounded-full w-4 h-4 inline ml-2 ' />
                      </li>
                    {isOpen && (
                      <div className="absolute z-10 mt-2 w-48 bg-[#333333] rounded-md shadow-lg "  onMouseLeave={() => {setIsOpen(false)}} >
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                          service 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        service 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        service 1
                        </a>
                      </div>
                    )}
                  </div>


<div className="">
<div className="relative"  onMouseOver={() => {setIsOpenCourses(true);   setIsOpenMentoring(false); setIsOpen(false)}}  >
                     <li className=' text-white hover:text-orange-400  p-4' >
                      courses
                      <img src="/arrow1.png" alt="" className='bg-white rounded-full w-4 h-4 inline ml-2 ' /></li>
                    {isOpenCourses && (
                      <div className="absolute z-10 mt-2 w-48 bg-[#333333] rounded-md shadow-lg" onMouseLeave={() => {setIsOpenCourses(false);}}>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        courses 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        courses 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        courses 1
                        </a>
                      </div>
                    )}
                  </div>
</div>
                  
                   

<div className="">
<div className="relative"   onMouseOver={() => {setIsOpenMentoring(true); setIsOpen(false); setIsOpenCourses(false);}}  >
                     <li className=' text-white hover:text-orange-400  p-4' >
                      mentoring
                      <img src="/arrow1.png" alt="" className='bg-white rounded-full w-4 h-4 inline ml-2 ' /></li>
                    {isOpenMentoring && (
                      <div className="absolute z-10 mt-2 w-48 bg-[#333333] rounded-md shadow-lg" onMouseLeave={() => setIsOpenMentoring(false)}>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        mentoring 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        mentoring 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
                        mentoring 1
                        </a>
                      </div>
                    )}
                  </div>

</div>
                   
                    <li className=' text-white hover:text-orange-400  p-4'>blog</li>
                    <li className=' text-white hover:text-orange-400  p-4'>contact</li>
                  </ul>
                </nav>

                <div className="flex flex-row">
                    <div className='w-12 h-12'>
                    <img src="/twitter1.png" className=' bg-white border-black border-8   rounded-full' alt="" />
                    </div>
                    <div className=''>
                    <img src="/yt1.png" className=' border-white w-9 h-9 m-2 p-1 rounded-full border-2 ' alt="" />
                    </div>
                    <div className=''>
                    <img src="/insta2.png" className='  w-9 h-9 m-2 p-1 rounded-full border-2 ' alt="" />
                    </div>
            </div>
            </div>

            <div onClick={()=> {setIsMenuOpen(!isMenuOpen)}} className='block md:hidden relative h-full'>
              {/* add hover effect
                  onclick show dropdown menu animated with css
                  refer back to previous dropdown as reference.
              */}
              <div className=''><img src="/menu.png" alt=""  className=' w-11 h-11'/></div>  
                {!isMenuOpen &&
                  <div className="absolute z-10 right-0 top-[50px]  " onMouseLeave={()=> {setIsMenuOpen(!isMenuOpen)}}>
                    <div className="bg-gray-600 opacity-90 w-full">
                        <ul className='uppercase text-white font-bold'>
                            <li className='w-[200px] pl-8 py-4  hover:text-orange-400'>About</li>
                            <li className='w-[200px] pl-8 py-4 hover:text-orange-400'>services</li>
                            <li className='w-[200px] pl-8 py-4 hover:text-orange-400'>courses</li>
                            <li className='w-[200px] pl-8 py-4 hover:text-orange-400'>mentoring</li>
                            <li className='w-[200px] pl-8 py-4 hover:text-orange-400'>blog</li>
                            <li className='w-[200px] pl-8 py-4 hover:text-orange-400'>contact</li>
                            <div>3icons</div>
                        </ul>
                    </div>
                  </div>
                }
               
            </div>
          </div>
      </div>
    </div>
  )
}

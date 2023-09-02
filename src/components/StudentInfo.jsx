import Profile from '../assets/profile.jpg'
import Badge1 from '../assets/Class=Designer, Level=Level 1.png'
import Badge5 from '../assets/Class=Designer, Level=Level 5.png'
export default function StudentInfo() {
  return (
    <div className='w-80 h-full py-6 bg-primary-color shadow-xl  rounded-lg flex flex-col justify-evenly items-center dark:bg-gray-800'>
        <div className='w-[80%] flex flex-col items-center'>
            <div className='w-40 h-40 rounded-full'>
                <img className='w-full h-full rounded-full' src={Profile} alt="" />
            </div>
            <h1 className="font-semibold text-lg">Student Name</h1>
            <span>IT Engineering, IT A</span>
            <span>studentname0232@gmail.com</span>
            <div className='w-full h-12 flex justify-center items-center'>
                <img className='w-8 h-8' src={Badge1} alt="" />
                <img className='w-8 h-8' src={Badge5} alt="" />
            </div>
          </div>
          <div className='flex flex-col justify-center'>
          <div className='w-80 p-4'>
            <h1 className="font-semibold text-lg">Skills</h1>
            <div className="w-full flex  gap-2 flex-wrap mt-2">
                <div className='max-w-[10rem] px-4 flex justify-center items-center rounded text-center  bg-accent-color text-accent-complementary'>HTML</div>
                <div className='max-w-[10rem] px-4 flex justify-center items-center rounded text-center bg-accent-color text-accent-complementary'>CSS</div>
                <div className='max-w-[10rem] px-4 flex justify-center items-center rounded text-center bg-accent-color text-accent-complementary'>JS</div>
            </div>
        </div>
        <div className='w-80 px-4'>
            <h1 className="font-semibold text-lg mb-4">Education</h1>
            <div className='w-full'>
                <h2 className="font-medium text-base ml-4">PVPPCOE</h2>
                <span className='ml-4'>IT Engineering, 2020-24</span>
            </div>
            <div className='w-full'>
                <h2 className="font-medium text-base ml-4">PVPPCOE</h2>
                <span className='ml-4'>IT Engineering, 2020-24</span>
            </div>
            <div className='w-full'>
                <h2 className="font-medium text-base ml-4">PVPPCOE</h2>
                <span className='ml-4'>IT Engineering, 2020-24</span>
            </div>
        </div>
          </div>
        
    </div>
  )
}

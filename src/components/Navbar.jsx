import { ChartBarSquareIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { DocumentChartBarIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center my-2 mx-[6rem] px-10  '>
        <Link to={'/dashboard'} className='flex gap-2 p-2'>
            <ChartBarSquareIcon className='w-6' />
            <p>Dashboard</p>
        </Link>
        <Link to={'/classroom'} className='flex gap-2 p-2'>
            <UsersIcon className='w-6' />
            <p>Classroom</p>
        </Link>
        <Link to={'/admin/chatroom'} className='flex gap-2 p-2'>
            <ChatBubbleLeftRightIcon className='w-6' />
            <p>Chatroom</p>
        </Link>
        <Link to={'/notice'} className='flex gap-2 p-2'>
            <DocumentChartBarIcon className='w-6' />
            <p>Notice</p>
        </Link>
        <Link to={'/activity'} className='flex gap-2 p-3'>
            <UserPlusIcon className='w-6' />
            <p>Activity</p>
        </Link>
        <Link to={'/elibrary'} className='flex gap-2 p-3'>
            <BookOpenIcon className='w-6' />
            <p>E-library</p>
        </Link>
        <Link to={'/tpo'} className='flex gap-2 p-3'>
            <ChartBarSquareIcon className='w-6' />
            <p>TPO</p>
        </Link>
    </div>
  )
}

export default Navbar
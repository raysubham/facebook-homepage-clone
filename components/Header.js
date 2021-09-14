import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import logo from './assets/fb-logo.png'
import { HeaderIcon } from './HeaderIcon'
import { signOut, useSession } from 'next-auth/client'

export const Header = () => {
  const [session] = useSession()
  return (
    <div className='sticky top-0 flex items-center z-100 bg-white p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        <Image src={logo} alt='fb-logo' width={40} height={40} layout='fixed' />
        <div className='flex items-center ml-2 rounded-full p-2 bg-gray-100'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex ml-2 bg-transparent outline-none items-center placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search Placeholder'
          />
        </div>
      </div>

      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image
          onClick={signOut}
          src={session.user.image}
          alt='user-image'
          className='rounded-full cursor-pointer'
          width={40}
          height={40}
          layout='fixed'
        />
        <p className='pl-2 hidden sm:inline-flex font-semibold pr-3 whitespace-nowrap pt-1'>
          {session.user.name}
        </p>

        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}

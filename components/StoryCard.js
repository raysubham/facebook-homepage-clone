import Image from 'next/image'

export const StoryCard = ({ name, src }) => {
  return (
    <div className='relative h-14 w-14 mx-2 md:h-20 md:w-20 lg:h-52 lg:w-36 cursor-pointer overflow-x p-2 transition duration-200 transform ease-in hover:scale-105'>
      <Image
        src={src}
        alt='user-profile'
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10'
        width={40}
        height={40}
        layout='fixed'
        objectFit='cover'
      />
      <Image
        src={src}
        alt='user-image'
        width={100}
        height={100}
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        layout='fill'
      />
    </div>
  )
}

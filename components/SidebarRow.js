import Image from 'next/image'

export const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className='flex items-center p-3 mb-2 rounded-3xl sm:max-w-[180px] cursor-pointer hover:bg-gray-200'>
      {src && (
        <Image
          src={src}
          alt='user-image'
          width={32}
          height={32}
          layout='fixed'
          className='rounded-full'
        />
      )}
      {Icon && <Icon className='h-8 w-8 text-blue-500' />}
      <p className='hidden sm:inline-flex font-medium ml-2 mt-1'>{title}</p>
    </div>
  )
}

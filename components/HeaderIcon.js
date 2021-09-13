export const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className={`cursor-pointer sm:h-12 md:px-10 md:hover:bg-gray-100 rounded-xl flex items-center active:border-b-2 active:border-blue-500 group ${
        active && 'text-blue-500'
      }`}>
      <Icon className='h-4 group-hover:text-blue-500 text-center sm:h-8' />
    </div>
  )
}

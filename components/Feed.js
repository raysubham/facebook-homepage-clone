import { InputBox } from './InputBox'
import { Stories } from './Stories'

export const Feed = () => {
  return (
    <div className='flex-grow h-screen pt-6 pb-48 mr-6 xl:mr-40 overflow-y-auto'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <InputBox />
      </div>
    </div>
  )
}

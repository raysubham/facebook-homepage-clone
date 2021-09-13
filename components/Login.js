import { signIn } from 'next-auth/client'
import Image from 'next/image'
import fb from './assets/fbbb.png'

export const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image src={fb} alt='fb' height={400} width={400} objectFit='contain' />
      <h1
        onClick={signIn}
        className='p-5 cursor-pointer rounded-full text-white bg-blue-500 text-center'>
        Login with Facebook
      </h1>
    </div>
  )
}

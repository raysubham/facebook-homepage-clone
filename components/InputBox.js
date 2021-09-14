import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import { addDoc, collection, getDoc } from 'firebase/firestore'
import { ref } from 'firebase/storage'

export const InputBox = () => {
  const [session] = useSession()
  const inputRef = useRef(null)
  const fileInputRef = useRef(null)
  const [file, setFile] = useState(null)

  const sendPost = async (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        mesage: inputRef.current.value,
        // timestamp: db.FieldValue.serverTimestamp(),
      })

      const doc = getDoc(docRef)
      console.log(doc)

      if (file) {
        const postsRef = ref(storage, `posts/${docRef.id}`)
      }

      inputRef.current.value = ''
    } catch (error) {
      console.error(`Error adding document: ${error}`)
    }
  }

  const addImageToPost = (e) => {
    const fileReader = new FileReader()
    const file = e.target.files[0]
    if (file) {
      fileReader.readAsDataURL(file)
    }

    fileReader.onload = (readerEvent) => {
      setFile(readerEvent.target.result)
    }
  }

  const removeImageFromState = () => {
    setFile(null)
  }

  return (
    <div className='mt-6 bg-white p-2 shadow-md rounded-2xl text-sm md:text-base md:font-medium'>
      <div className='flex items-center mx-auto p-4 space-x-auto'>
        <Image
          src={session.user.image}
          alt='user-image'
          width={40}
          height={40}
          layout='fixed'
          className='rounded-full'
        />
        <form className='flex flex-1'>
          <input
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name}?`}
            className='ml-2 py-2 h-12 bg-gray-200 px-4 flex-grow outline-none rounded-full'
          />
          <button hidden type='submit' onClick={sendPost}></button>
        </form>
        {file && (
          <div className='flex flex-col filter brightness-110 transition duration-150 transform hover:scale-105 ml-1'>
            <Image
              height={40}
              width={40}
              src={file}
              alt='upload-image'
              className='object-contain'
            />
            <p
              className='text-red-500 text-xs text-center cursor-pointer'
              onClick={removeImageFromState}>
              Remove
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm lg:text-base'>Live Video</p>
        </div>
        <div className='inputIcon' onClick={() => fileInputRef.current.click()}>
          <CameraIcon className='h-7 text-green-500' />
          <input
            type='file'
            hidden
            ref={fileInputRef}
            onChange={addImageToPost}
          />
          <p className='text-xs sm:text-sm lg:text-base'>Photo</p>
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm lg:text-base'>Feeling/Activity</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

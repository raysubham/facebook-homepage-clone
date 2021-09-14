import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { Login } from '../components/Login'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Feed } from '../components/Feed'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook | Home</title>
      </Head>

      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return { props: { session } }
}

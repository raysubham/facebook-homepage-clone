import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FB_API_ID,
      clientSecret: process.env.FB_API_SECRET,
    }),
  ],
})

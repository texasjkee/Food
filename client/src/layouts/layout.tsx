import { FC } from 'react'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

interface layoutProps {
  children: React.ReactNode
}

export const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Hero />
      <div className='container mx-auto flex-1 py-10'>{children}</div>
    </div>
  )
}

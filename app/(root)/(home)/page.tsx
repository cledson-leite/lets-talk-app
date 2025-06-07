'use client'

import MeetingTypeList from '@/components/MeetingTypeList'
import { useState, useEffect } from 'react'

export default function Home() {
  const getTime = () => {
    return new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit', minute: '2-digit'
    })
  }
  
  const getDate = () => new Intl.DateTimeFormat('pt-BR', {dateStyle: 'full'}).format(new Date())

  const [time, setTime] = useState(getTime)
  const [date, setDate] = useState(getDate)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime())
      setDate(getDate())
      return () => clearInterval(intervalId)
    }, 1000)
  }, [])


  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full roundend-[20px] bg-hero bg-cover'>
        <div className='flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center  text-base font-normal'>Upcoming meeting at: 12:30 PM</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg font-semibold text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
      </section>
  )
}

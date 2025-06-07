'use client'

import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'


export default function MeetingTypeList() {
  const route = useRouter()
  const [state, setState] = useState<'isSheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard 
        img={'/icons/add-meeting.svg'}
        title={'New Meeting'}
        subtitle={'Start an instant meeting'}
        handleClick={() => setState('isInstantMeeting')}
        className='bg-orange-600'
      />
      <HomeCard 
        img={'/icons/join-meeting.svg'}
        title={'Join Meeting'}
        subtitle={'via invitation link'}
        handleClick={() => setState('isJoiningMeeting')}
        className='bg-blue-600'
      />
      <HomeCard 
        img={'/icons/schedule.svg'}
        title={'Shedule Meeting'}
        subtitle={'Plan your meeting'}
        handleClick={() => setState('isSheduleMeeting')}
        className='bg-purple-600'
      />
      <HomeCard 
        img={'/icons/recordings.svg'}
        title={'View Recordings'}
        subtitle={'Check out your recordings'}
        handleClick={() => route.push('/recordings')}
        className='bg-yellow-600'
      />
    </section>
  )
}

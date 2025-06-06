import React from 'react'

type MeetingProps = {
  params: {
    id: string
  }
}

export default function Meeting({params}: MeetingProps) {
  return (
    <div>Meeting Room: #{params.id}</div>
  )
}

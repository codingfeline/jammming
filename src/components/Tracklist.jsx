import React, { useState } from 'react'

const Tracklist = () => {
  const [track, setTrack] = useState([
    {
      name: 'Track name1',
      artist: 'Artist name1',
      album: 'Album name1',
      id: '1',
    },
    {
      name: 'Track name2',
      artist: 'Artist name2',
      album: 'Album name2',
      id: '2',
    },
  ])

  return <div>Tracklist</div>
}

export default Tracklist

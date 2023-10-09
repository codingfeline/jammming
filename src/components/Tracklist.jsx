import React, { useEffect, useState } from 'react'

const Tracklist = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    setTracks([
      {
        name: 'Song 1',
        artist: 'Artist name1',
        album: 'Album name1',
        id: '1',
      },
      {
        name: 'Song 2',
        artist: 'Artist name2',
        album: 'Album name2',
        id: '2',
      },
    ])
  }, [tracks])

  return (
    <>
      <h3>Tracklist</h3>
      {tracks.map(track => (
        <div key={track.id}>
          <span>{track.name}</span> - <span>{track.artist}</span>
        </div>
      ))}
    </>
  )
}

export default Tracklist

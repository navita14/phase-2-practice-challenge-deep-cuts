import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
const [tracks,setTracks] = useState([])
const [search,setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:8001/tracks")
  .then(res => res.json())
  .then(data =>setTracks(data))
}, [])
    
const filteredTracks = tracks.filter(track => {
  return track.title.toLowerCase().includes(search.toLowerCase()) || track.artist.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div>
      <Search setSearch={setSearch}/>
      <AddTrackForm setTracks={setTracks}/>
      <TracksList tracks={filteredTracks}/> 
      {/* previosly tracks={tracks} */}
    </div>
  )
}

export default TracksPage
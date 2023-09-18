import React from 'react'

function AddTrackForm({setTracks}) {
  function handleSubmit(event){
    event.preventDefault()


    const newTrack ={ 
      'title': event.target.title.value
      'artist':event.target.artist.value
      'BPM':event.target.BPM.value
      'image':event.target.image.value
    }

    fetch("http://localhost:8001/tracks", {
    'method' : 'POST',
    'headers' : {
      'Content-Type' : 'applicatuon/json'
    },
    'body': JSON.stringify(newTrack),
  })
  .then( res => res.json())
  .then(data => {
    setTracks(prevTracks => [...prevTracks, data])  ///update front end
  })
}

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="image" placeholder="Image URL"/>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="artist" placeholder="Artist" />
          <input type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm
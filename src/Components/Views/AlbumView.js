// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const [ albumData, setAlbumtData ] = useState([])

    const { id } = useParams()
    return (
        <div>
            <p>Album Data Goes Here!</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default AlbumView
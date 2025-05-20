import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Player = () => {
 
  const {id} = useParams();
  const navigate = useNavigate()

 
 
 
  const [apiData, setApiData] = useState({
    name: "",
    published_at: "",
    type: "",
    key: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Y4NWMxY2ZhZDFiYjhmOTc4MjlkMzc0OTg5YWMzZCIsIm5iZiI6MTc0NzY2MDAwOC41ODcwMDAxLCJzdWIiOiI2ODJiMmNlOGY2Y2YyMDc2ZjNlMjRkODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eURfyw6Hvz_MjycNHNJGn5yLQZyNIDwlb-l1fDpcFe4'
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0])
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      {apiData.key ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='trailer'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
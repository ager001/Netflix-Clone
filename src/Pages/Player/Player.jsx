import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

const[apiData, setApiData] = useState({

  
})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Y4NWMxY2ZhZDFiYjhmOTc4MjlkMzc0OTg5YWMzZCIsIm5iZiI6MTc0NzY2MDAwOC41ODcwMDAxLCJzdWIiOiI2ODJiMmNlOGY2Y2YyMDc2ZjNlMjRkODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eURfyw6Hvz_MjycNHNJGn5yLQZyNIDwlb-l1fDpcFe4'
  }
};

useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/1241436/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

}, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe
        width='90%'
        height='90%'
        src='https://www.youtube.com/embed/fsQgc9pCyDU'
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player

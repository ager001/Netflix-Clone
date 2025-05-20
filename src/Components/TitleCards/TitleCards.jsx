import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Y4NWMxY2ZhZDFiYjhmOTc4MjlkMzc0OTg5YWMzZCIsIm5iZiI6MTc0NzY2MDAwOC41ODcwMDAxLCJzdWIiOiI2ODJiMmNlOGY2Y2YyMDc2ZjNlMjRkODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eURfyw6Hvz_MjycNHNJGn5yLQZyNIDwlb-l1fDpcFe4'
    }
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => {
        setApiData([])
        console.error(err)
      })
  }, [category])

  useEffect(() => {
    const ref = cardsRef.current
    if (!ref) return
    const handleWheel = event => {
      event.preventDefault()
      ref.scrollLeft += event.deltaY
    }
    ref.addEventListener('wheel', handleWheel)
    return () => ref.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData && apiData.length > 0 ? (
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title || ''} />
              <p>{card.original_title}</p>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  )
}

export default TitleCards
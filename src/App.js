import React, { useState, useEffect } from 'react'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'
export const TourContext = React.createContext()
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const handleDelete = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  

  const fetchUrl = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tour = await response.json()
      console.log(tour)
      setLoading(false)
      setTours(tour)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchUrl()
  }, [])
  if (loading) {
    return (
      <TourContext.Provider value={{ handleDelete }} >
        <main>
          <h3 className='loading'>Loading...</h3>
        </main>
      </TourContext.Provider>
    )
  }
  return (
    <TourContext.Provider value={{ handleDelete }} >
      <main>
        <Tours tours={tours} handleRefresh={fetchUrl} />
      </main>
    </TourContext.Provider>
  );
}

export default App;

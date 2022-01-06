import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, handleRefresh }) => {
    return (
        <div className="loading">
            <h2>Tour App</h2>
            <div className="underline">
            </div>
            {tours.length ? tours.map(tour => <Tour key={tour.id} {...tour} />) : <button className='btn' onClick={() => handleRefresh()}>Refresh </button>}

        </div>
    )
}

export default Tours

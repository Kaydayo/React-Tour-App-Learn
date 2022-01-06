import React, { useContext, useState } from 'react'
import { TourContext } from './App'

const Tour = ({ id, name, info, image, price }) => {

    const [readMore, setReadMore] = useState(false)

    
    const { handleDelete } = useContext(TourContext)

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(200)} ...`} <button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : 'Read more'}</button>
                </p>
                <button className="delete-btn" onClick={() => handleDelete(id)}>
                    not interested
                </button>
            </footer>

        </article>
    )
}

export default Tour

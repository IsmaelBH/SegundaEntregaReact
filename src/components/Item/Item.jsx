import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    return (
        <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />

        </div>
    )
}

export default Item

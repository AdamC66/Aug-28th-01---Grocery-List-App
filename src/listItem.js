import React from 'react';

const ListItem = ({category, quantity, item}) => {
    
    return(
    <li className={category}>
        <button>-</button>
        <span>{quantity} {item}</span>
        <button>+</button>
    </li>
    )

}

export default ListItem
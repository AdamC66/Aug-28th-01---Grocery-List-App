import React from 'react';
import ListItem from "./listItem";

const ShoppingList = () =>{
    return(
        <ul className="shoppinglist" id = "ShoppingList">
            <ListItem category={'meat'} quantity={3} item={'Steak'}/>
            <ListItem category={'prod'} quantity={4} item={'Apples'}/>
            <ListItem category={'dairy'} quantity={1} item={'Milk (1L, 2%)'}/>
            <ListItem category={'bakery'} quantity={2} item={'Baguettes'}/>
        </ul>
    )

}

export default ShoppingList;
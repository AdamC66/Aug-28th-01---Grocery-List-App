import React from 'react';
import logo from './logo.svg';
// import './reset.css';
import './App.css';
import ShoppingList from './shoppingList';
import NewItemForm from './newItemForm';
import Filters from './filters';

function App() {
  return (
    <div className="App">
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>

      <NewItemForm />

      <section id="filterCategories">
        <Filters />
        <form id="newCat" className="cat-new">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
        </form>
      </section>

      <ShoppingList />
    </main>      
    </div>
  );
}

export default App;

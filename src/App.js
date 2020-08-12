import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MyList from './MyList';


function App() {
  const [wishlistData, setWishlistData] = React.useState([]);
  const handleWishlist = (data) =>{
    setWishlistData([
      ...wishlistData,
        data
    ]);
  }

  const handleAddList = (data) =>{
    let addListData = [...wishlistData];
    addListData = addListData.filter((item)=>item.imdbID !== data.id)
    setWishlistData([
      ...addListData,
        data
    ])
  }

  // const addWatchedMoviesList = (data) =>{
  //  const isWatched = false;
  //  let addWatchedList = [...wishlistData];
  //  addWatchedList = addWatchedList.filter((item)=>item.imdbID !== data.id)
  //  setWishlistData([
  //    ...addWatchedList,
  //       data,
  //  ])
  // }

  const handleRemove = (data) =>{
   console.log(data)
   let addWatchedList = [...wishlistData];
   addWatchedList = addWatchedList.filter((item)=>item.imdbID !== data.imdbID)
   setWishlistData([
     ...addWatchedList,
   ])
  }

  const totalAddedLitsItem  = wishlistData.filter((item)=>item).length;
  return (
    <div className="">
     <Navbar totalAddedLitsItem={totalAddedLitsItem} />
        <Switch>
            <Route exact path="/" render={() => <Home handleWishlist={handleWishlist} handleAddList={handleAddList} />} />
            <Route exact path="/mylist" render={(props) => <MyList wishlistData={wishlistData} handleRemove={handleRemove} />} />
        </Switch>
    </div>
  );
}

export default App;

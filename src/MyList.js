import React from 'react';
import './index.css';


const MyList = (props) =>{
    console.log(props)
    const wishListData = props.wishlistData && props.wishlistData.length && props.wishlistData[0];
    if(!wishListData){
        return null;
    }
    return(
        <>
            <div className="container">
               <div className="row">
                    {
                        wishListData.map((item,i)=>{
                            console.log(item)
                            return (
                            <div className="col-sm-4 card_style">
                                <div className="card card_item"  key={i}>
                                        <img className="card-img-top img_style" src={item.Poster} alt="poster" />
                                        <div className="card-body item_style">
                                            <h6 className="card-title">Title : {item.Title}</h6>
                                            <h6 className="card-title">Type : {item.Type}</h6>
                                            <p className="card-title">Year : {item.Year}</p>
                                            <p>Status: {item.isWatched ?"Added to Watched":"Add to Watch"}</p>
                                            <button onClick={()=>{props.handleRemove(item)}}
                                             className="btn-outline-danger remove_btn"
                                            >Remove from my list</button>
                                        </div>
                                </div>
                            </div>
                            )
                        })
                    }
               </div>
            </div>
        </>
    );
}

export default MyList;
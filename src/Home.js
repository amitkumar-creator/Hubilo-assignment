import React from 'react';
import './App.css';
import {toast} from 'react-toastify'; 
import '../node_modules/react-toastify/dist/ReactToastify.css';


toast.configure()
class Home extends React.Component{
    state={
        Data : [],
        check : [],
        select: []
    }
      async componentDidMount(){
          const URL = "http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad";
          const Res = await fetch(URL);
          const data  = await Res.json();
          this.setState({Data:data.Search})
          console.log(data)
      }
      handleAddList = () =>{
        toast.success('Added Sucessfully',{position:toast.POSITION.TOP_CENTER});
        this.props.handleWishlist(this.state.check)
      }
      handleCheck = (e,id) =>{
        const {Data} = this.state;
        let originalData = [...Data];
        if(e.target.value){
            const wishlistdata = Data.find((d)=>d.imdbID === id);
            originalData = originalData.find((d)=>d.imdbID === id);
            originalData.isChecked = e.target.value;
            this.setState({check:wishlistdata, Data:[...Data,originalData]});
        }else{
            originalData = originalData.find((d)=>d.imdbID === id);
            originalData.isChecked = e.target.value;
        }
        }
    
     handleSelect = (e) =>{
        this.setState({select:e.target.value},()=>{
            fetch(`http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=${this.state.select}`)
            .then(res=>res.json())
            .then(res2=>{
            this.setState({Data:res2.Search})
            })
        })
    }
    handleWatehedList = (id) =>{
        const {Data} = this.state;
        const watchlistData = Data.find((d)=>d.imdbID === id);
        if(!watchlistData.isWatched){
            watchlistData.isWatched = true;
        }else{
            watchlistData.isWatched = false;
        }
        this.setState({
            Data:[...Data,watchlistData]
        });
    }
render(){
    return(
        <>  
            <div className="container" >
                <div className="btn_style">
                    <div className="btn-style">
                                <label >Search By Year : </label>
                              <select onChange={this.handleSelect}
                                    // value={this.state.select}
                                    >
                                    {
                                        [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
                                        2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
                                        .map((item,i)=>{
                                                return <option key={i} value={item}>{item}</option>
                                        })
                                    }
                                </select>
                           <div className="row_style">
                                <button className="btn-outline-primary btn_add"
                                    onClick={this.handleAddList}
                                    >Add to My List</button>
                           </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.Data.map((item,i)=>{
                            return(
                            <div className="col-sm-4 card_style" key={i}>
                                <div className="card card_item">
                                        <img className="card-img-top img_style" src={item.Poster} alt="poster" />
                                        <div className="card-body item_style">
                                            <h6 className="card-title">Title : {item.Title}</h6>
                                            <h6 className="card-title">Type : {item.Type}</h6>
                                            <p className="card-title">Year : {item.Year}</p>
                                            <input type="checkbox" checked={item.isChecked} onChange={((e)=>this.handleCheck(e,item.imdbID))} />
                                            <label style={{marginLeft:"10px"}}>Add to List</label><br/>
                                            <a onClick={()=>this.handleWatehedList(item.imdbID)}
                                            >{item.isWatched ? 'Remove from Watchlist': 'Add to Watched List'}
                                            </a>
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
}

export default Home;
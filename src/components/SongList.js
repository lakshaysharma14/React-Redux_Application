import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../action/index'

class SongList extends Component 
{
    renderList = () =>{
        return this.props.songs.map((song)=>{
            return(
            <div className="item" key={song.title}>
                
                <div className="right floated content">
                
                    <button
                        onClick={() => {this.props.selectSong(song)} }  
                        className="ui button primary">Select
                    </button>
                
                </div>
                
                <div className="content">{song.title} </div>

            </div>
            );
        })
    }
    
    render() 
    {   
        console.log("From Action Creator",this.props)
        return(
            <div className="ui divided list">
            <h1><b><i><em>Song List</em></i></b></h1>
            {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>  //here we are getting whole state of the combine reducer
{
    console.log("From Reducers",state)
    return { songs: state.song};
}

export default connect(mapStateToProps,{ selectSong:selectSong} )(SongList);
//We alaways have to pass action creator in connect function then only it will update
//the state in redux store otherwise it wont. 


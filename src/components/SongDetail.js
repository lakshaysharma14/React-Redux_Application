import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song_selected}) =>
{
    console.log(song_selected)
    if(!song_selected)
    {
        return <div> Select any Song !! </div>
    }

    return( 
        <div>
            <h2>Details For:</h2>
            <p>                 
                Title:{song_selected.title}
                <br />
                Duration:{song_selected.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state)=>{

    return { song_selected:state.selectedSong }
}


export default connect(mapStateToProps)(SongDetail);
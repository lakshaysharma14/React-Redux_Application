import {combineReducers} from 'redux';

//Reducer
const songReducer = () =>{
    return[
        {title:  'dont let me down'         , duration:'3:20'},
        {title:  'love me like you do'      , duration:'4:40'},
        {title:  'what makes you beautiful' , duration:'4:10'},
        {title:  'audio'                    , duration:'5:20'},
        {title:  'rude'                     , duration:'2:20'}
    ];
}

const selectedsongReducer = (selectedSong=null,action) => 
{
    if(action.type==="Song_Selected")
    { return(action.payload) }

    return selectedSong
}

//==========================================

export default combineReducers({
    song:songReducer,
    selectedSong:selectedsongReducer
})
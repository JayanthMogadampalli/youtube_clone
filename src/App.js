import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import { searchBar, videoList, videoDetail } from './components';
import youtube from './api/youtube';

export default class App extends Component {

    state={
        videos:[], 
        selectedVideo:null;
    }

    handleSubmit =async(e)=>{
     const response=await youtube.get('search',{
         params:{
             part:'snippet',
             maxResults:5,
             key:'[APIKEY]',
             q:searchTerm,
         }
     });
       this.setState({videos:response.data.items,selectedVideo:response.data.items[0] });
    }

    onVideoSelect= (video)=>{
            this.setState({selectedVideo:video});
    }

    render() {
        const { selectedVideo, videos } = this.state;
        
        return (
            <Grid style={{justifyContent:'center'}} container spacing={10}>
              <Grid item xs={11}>
               <Grid container spacing={10}>
                  <Grid item xs={12}>
                    <searchBar onFormSubmit={this.handleSubmit}/>
                  </Grid>    
                  <Grid item xs={8}>
                    <videoDetail video={selectedVideo} />
                  </Grid>
                   <Grid item xs={4}>
                    <videoList videos={videos} onVideoSelect={this.onVideoSelect} />
                   </Grid>
               </Grid>
              </Grid>            
            </Grid> 
        );
    }
}

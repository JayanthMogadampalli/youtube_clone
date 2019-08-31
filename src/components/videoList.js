import React from 'react's
import {Grid} from '@material-ui/core';
import videoItem from './videoItem';

const videoList=({videos,onVideoSelect}) => {
  const listofVideos=videos.map((video,id) =><videoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)

  return(
      <Grid container spacing={10}>
        {listofVideos}
      </Grid>
  );
}


export default videoList;
import React from 'react'
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from "@material-ui/core";
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';

function Footer() {
    return (
        <div className ="footer">
            <div className="footer-left">
            
<img className="footerAlbum-logo"src="https://i1.sndcdn.com/artworks-000239465971-hnu0g4-t500x500.jpg" alt=""/>
<div className="songInfo">
<h3>I like Me Better</h3>
<p>LAUV</p>
</div>
            </div>
<div className="footer-center">

<ShuffleIcon className="footer-green"/>
<SkipPreviousIcon className="footer-icon"/>
<PlayCircleOutlineIcon fontSize="large" className="footer-icon"/>
<SkipNextIcon className="footer-icon"/>
<RepeatIcon className="footer-green"/>
</div>
<div className="footer-right">

<Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
<SubtitlesIcon fontSize="small"/>
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

</div> 

        </div>
    )
}

export default Footer

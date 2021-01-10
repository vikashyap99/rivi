import React, { Component } from 'react';
import {cities} from "../city/city";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ActivitiesListView from './ActivitiesListView'
import CitiesListView from "./CitiesListView";





const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

class SreachBar extends Component {

        
      state = {
        cities : [cities[13]],
      }
  
      citiesHnadler = (e,value) => {

        this.setState({cities: value})
      }
        
        render(){

          const { classes } = this.props;

        return (
            <div className={classes.root}>
                 <Autocomplete
        multiple
        id="tags-outlined"
        options={cities}
        getOptionLabel={(option) => option.name}
        defaultValue={[cities[13]]}
        filterSelectedOptions
        onChange = {(e,v) => this.citiesHnadler(e,v)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Cities"
            placeholder="Favorites"
            value={this.state.cities}
            
          />
        )}
      />
          <div style={{ padding: 20 }}>
                    <Grid container spacing={3}>
                            
                          <Grid item xs style={{height:'620px', width: '600px', overflowY: 'scroll' }} >
                          
                            <Paper ><CitiesListView cities={this.state.cities}/></Paper>
                            
                            
                          </Grid>
                          <Grid item xs style={{height:'620px', width: '600px', overflowY: 'scroll' }} >
                            
                            <Paper ><ActivitiesListView/></Paper>
                          </Grid>
                    </Grid>
              </div>
            </div>
        );
        }
    
}

export default withStyles(useStyles)(SreachBar)

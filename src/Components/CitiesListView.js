import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

class CitiesListView extends Component {
    render() {

        const selectedCities = this.props.cities.map((city) => {

            //console.log(city.name);
             return <div key={city.id}>
               <Card >
                 <CardContent style={{backgroundColor: '#d7e0da'}}>
                 {city.name}
                 </CardContent>
               </Card>
              
             </div>
           })
  
  
        return (
            <div>
                {selectedCities}
            </div>
        );
    }
}

export default CitiesListView;
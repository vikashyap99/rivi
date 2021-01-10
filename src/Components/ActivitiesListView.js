import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

class ActivitiesListView extends Component {

    state = {
        activities: []
      }

    componentWillMount(){

        

        fetch('http://my-json-server.typicode.com/rivitest001/task04/posts')
        .then(response => response.json())
        .then((data) => {
            this.setState({activities: data})
        });
        fetch('http://my-json-server.typicode.com/rivitest001/task03/posts')
        .then(response => response.json())
        .then((data) => {
            this.setState({activities: [...this.state.activities,...data]})
        });
        fetch('http://my-json-server.typicode.com/rivitest001/task02/posts')
        .then(response => response.json())
        .then((data) => {
            this.setState({activities: [...this.state.activities,...data]})
        });
        fetch('http://my-json-server.typicode.com/rivitest001/task01/posts')
        .then(response => response.json())
        .then((data) => {
            this.setState({activities: [...this.state.activities,...data]})
        });

      }

    render() {

        const activities = this.state.activities.map((act) => {

              return <div key={act.id}>
                <Card style={{backgroundColor: '#d7e0da'}}>
                  <CardContent>
                  {act.activity}
                  </CardContent>
                </Card>
              </div>
            })

        return (
            <div>
               {activities} 
            </div>
        );
    }
}

export default ActivitiesListView; 
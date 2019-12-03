import React, {useState, useEffect, Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';


const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null)
    const handleSelectedActivity = (id: string) => {
      setSelectedActivity(activities.filter(a => a.id === id)[0])
    }
    const [editMode, setEditMode] = useState(false)
    const handleCreateOpenForm = () => {
      setSelectedActivity(null)
      setEditMode(true)
    }

    const handleCreateActivity = (activity: IActivity) => {
      setActivities([...activities, activity])
    }

    const handleEditActivity = (activity: IActivity) => {
      setActivities([...activities.filter(a => a.id !== activity.id), activity])
    }

    useEffect(() => {
      axios.get('http://localhost:5000/api/activities')
        .then(response => {
          setActivities(response.data)
        })
    }, [])  

    return (
     
        <Fragment>
          <NavBar openCreateForm={handleCreateOpenForm} />
          <Container style={{marginTop: '7em'}}>
            <ActivityDashboard  activities={activities} 
                                selectActivity={handleSelectedActivity} 
                                selectedActivity={selectedActivity} 
                                editMode={editMode}
                                setEditMode={setEditMode}
                                setSelectedActivity={setSelectedActivity}
                                createActivity={handleCreateActivity}
                                editActivity={handleEditActivity}
                                 />
          </Container>   
        </Fragment>
    );
  
  
}

export default App;

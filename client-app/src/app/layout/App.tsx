import React, {useState, useEffect, Fragment, SyntheticEvent} from 'react';
import { Container } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';


const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null)
    const [editMode, setEditMode] = useState(false)
    const [loading, setLoading] = useState(true)
    const [submiting, setSubmiting] = useState(false)
    const [target, setTarget] = useState('')
    
    const handleCreateOpenForm = () => {
      setSelectedActivity(null)
      setEditMode(true)
    }
    const handleSelectedActivity = (id: string) => {
      setSelectedActivity(activities.filter(a => a.id === id)[0])
      setEditMode(false)
    }

    const handleCreateActivity = (activity: IActivity) => {
      setSubmiting(true)
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity])  //add activity into activities
        setSelectedActivity(activity)
        setEditMode(false)
      }).then(() => setSubmiting(false))
    }

    const handleEditActivity = (activity: IActivity) => {
      setSubmiting(true)
      agent.Activities.edit(activity).then(() => {
        setActivities([...activities.filter(a => a.id !== activity.id), activity]) //讓除了要edit的activity維持原狀
        setSelectedActivity(activity)
        setEditMode(false)
      }).then(() => setSubmiting(false))
    }

    const handleDeleteActivity = (event: SyntheticEvent<HTMLButtonElement> , id: string) => {
      setSubmiting(true)
      setTarget(event.currentTarget.name)
      agent.Activities.delete(id).then(() => {
        setActivities([...activities.filter(a => a.id !== id)])
      }).then(() => setSubmiting(false))
    }

    useEffect(() => {
      agent.Activities.list()
        .then(response => {
          let activities: IActivity[] = []
          response.forEach((activity) => {
            activity.date = activity.date.split('.')[0]
            activities.push(activity)
          })
          setActivities(activities)
        }).then(() => setLoading(false))
    }, [])  

    if(loading) 
      return <LoadingComponent content='Loading activities...' />

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
                                deleteActivity={handleDeleteActivity}
                                submiting={submiting}
                                target={target}
                                 />
          </Container>   
        </Fragment>
    );
  
  
}

export default App;

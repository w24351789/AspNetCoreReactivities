import React, { SyntheticEvent } from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps{
    activities: IActivity[]
    selectActivity: (id: string) => void
    deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void
    submiting: boolean
    target: string
}
export const ActivityList: React.FC<IProps> = ({activities, selectActivity, deleteActivity, submiting, target}) => {
    return (
        <Segment clearing>
            <Item.Group divided>
            
                {activities.map((activity) => (
                    <Item  key={activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button 
                                onClick={() => selectActivity(activity.id)} 
                                floated='right' 
                                content='View' 
                                color='blue'/>
                            <Button 
                                name={activity.id}
                                loading={activity.id===target && submiting}
                                onClick={(e) => deleteActivity(e, activity.id)} 
                                floated='right' 
                                content='Delete' 
                                color='red'/>
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                    </Item>       
                ))}
                
                
            </Item.Group>
        </Segment>
        
    )
}

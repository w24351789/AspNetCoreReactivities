import React from 'react'
import { Card, Image, Button, ButtonGroup } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps{
    activity: IActivity
    setEditMode: (editMode: boolean) => void
    setSelectedActivity: (activities: IActivity |　null) =>　void
}

export const ActivityDetails : React.FC<IProps> = ({activity, setEditMode, setSelectedActivity}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
               {activity.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths={2}>
                    <Button onClick={() => setEditMode(true)} color='blue' basic content='Edit' />
                    <Button onClick={() => setSelectedActivity(null)} color='grey' basic content='Cancel' />
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}

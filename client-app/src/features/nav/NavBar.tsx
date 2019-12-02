import React from 'react'
import { Menu, Button, Container} from 'semantic-ui-react'

export const NavBar = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activites'/>
                <Menu.Item>
                    <Button positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        
      </Menu>
    )
}

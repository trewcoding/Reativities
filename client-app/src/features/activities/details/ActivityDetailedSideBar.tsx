import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Avatar, Box, List, ListItem, ListItemText, ListSubheader } from '@mui/material'

export default observer(function ActivityDetailedSidebar () {
    return (
        <>
            <Box
                sx={{ border: 'none' }}
            >
                3 People Going
            </Box>
            <Box>
                <List>
                    <ListItem sx={{ position: 'relative' }}>
                        <ListSubheader>
                            Host
                        </ListSubheader>
                        <Avatar src={'/assets/user.png'} />
                        <ListItemText>
                                <Link to={`#`}>Bob</Link>
                            <ListItemText style={{ color: 'orange' }}>Following</ListItemText>
                        </ListItemText>
                    </ListItem>

                    <ListItem style={{ position: 'relative' }}>
                        <Avatar src={'/assets/user.png'} />
                        <ListItemText>
                            <ListSubheader>
                                <Link to={`#`}>Tom</Link>
                            </ListSubheader>
                            <ListItemText style={{ color: 'orange' }}>Following</ListItemText>
                        </ListItemText>
                    </ListItem>

                    <ListItem style={{ position: 'relative' }}>
                        <Avatar src={'/assets/user.png'} />
                        <ListItemText >
                            <ListSubheader>
                                <Link to={`#`}>Sally</Link>
                            </ListSubheader>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
        </>

    )
})

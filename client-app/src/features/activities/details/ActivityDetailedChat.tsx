import { Avatar, Button, Card, FormControl, FormGroup, Input, TextField, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Card
                sx={{ border: 'none' }}
            >
                <h2>Chat about this event</h2>
            </Card>
            <Card>
                <FormGroup>
                    <FormControl>
                        <Avatar src='/assets/user.png' />
                        <Typography>Matt</Typography>
                        <Typography>Today at 5:42PM</Typography>
                        <Typography>How artistic!</Typography>
                        <Button>Reply</Button>
                    </FormControl>

                    <FormControl>
                        <Avatar src='/assets/user.png' />
                        <Typography>Joe Henderson</Typography>
                        <Typography>5 days ago</Typography>
                        <Typography>Dude, this is awesome. Thanks so much</Typography>
                        <Button>Reply</Button>
                    </FormControl>

                    <FormControl>
                        <TextField>

                        </TextField>
                        <Button>Reply</Button>
                    </FormControl>
                </FormGroup>
            </Card>
        </>

    )
})

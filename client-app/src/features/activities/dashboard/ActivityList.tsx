import { Box, Button, Card, CardActions, CardContent, List, Typography } from '@mui/material';
import { Activity } from '../../../app/models/activity';
import { LoadingButton } from '@mui/lab';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;


    const [target, setTarget] = useState('');
    
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>,id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <List>
            {activitiesByDate.map(activity => (
                <Card key={activity.id} component='div' sx={{ bgcolor: 'yellow' }}>
                    <CardContent>
                        <Typography variant='h4'>{activity.title} </Typography>
                        <Typography variant='h5'>{activity.date}</Typography>
                        <Typography>{activity.description}</Typography>
                        <Typography>{activity.city}, {activity.venue}</Typography>
                        <Typography color={'Blue'}>{activity.category}</Typography>
                    </CardContent>
                    <CardActions>
                        <Box
                            m={1}
                            //margin
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            <Button variant='text' color='success' size='medium' onClick={() => activityStore.selectActivity(activity.id)}>View</Button>
                            <LoadingButton
                                id={activity.id}
                                loading={loading && target === activity.id} 
                                variant='text' 
                                color='error' 
                                size='medium' 
                                onClick={(e) => handleActivityDelete(e, activity.id)}
                                >
                                Delete
                            </LoadingButton>
                        </Box>

                    </CardActions>

                </Card>
            ))}
        </List>
    )
})
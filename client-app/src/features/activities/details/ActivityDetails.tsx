import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store'



export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent content='Loading'/>;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`/assets/categoryImages/${activity.category}.jpg`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {activity.title}
                </Typography>
                <Typography variant="h6" component="div">
                    {activity.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {activity.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={`/manage/${activity.id}`} size="small">Edit</Button>
                <Button href={`/activities`} size="small">Cancel</Button>
            </CardActions>
        </Card>
    )
})
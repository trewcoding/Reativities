import { Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress } from '@mui/material'
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store'



export default function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

    if (!activity) return <LoadingComponent content='Loading'/>;

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
                <Button onClick={() => openForm(activity.id)} size="small">Edit</Button>
                <Button onClick={cancelSelectedActivity} size="small">Cancel</Button>
            </CardActions>
        </Card>
    )
}
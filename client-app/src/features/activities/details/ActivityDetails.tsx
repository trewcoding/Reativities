import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
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
                <Button onClick={cancelSelectActivity} size="small">Cancel</Button>
            </CardActions>
        </Card>
    )
}
import { Avatar, Button, Card, CardContent, CardMedia, Icon, Link, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {
    
    return (
        <Card>
            <CardMedia>
                <Avatar sizes="small" src='/assets/user.png' />
                <Link href={`/activities/${activity.id}`} underline='hover' variant='h4' sx={{ color: 'text.primary' }}>{activity.title}</Link>
                <Typography>
                    Hosted by Bob
                </Typography>
            </CardMedia>
            <CardContent>
                <Typography>
                    <Icon component={AccessTimeIcon} />{activity.date}
                    <Icon component={RoomIcon} />{activity.venue}
                </Typography>
                <Typography>
                    Attendes go here
                </Typography>
                <Typography>
                    <span>{activity.description}</span>
                    <Button
                        href={`/activities/${activity.id}`}
                        color='info'
                        children='View'
                        sx={{ align: 'right' }}
                    />
                </Typography>
            </CardContent>
        </Card>
    )
}
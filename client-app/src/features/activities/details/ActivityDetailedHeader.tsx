import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    activity: Activity
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
    return (
        <Card>
            <CardContent sx={{padding: 0}}>
                <CardMedia component='img' src={`/assets/categoryImages/${activity.category}.jpg`}/>
                <CardContent classes={activityImageTextStyle}>
                    <Typography
                        children={activity.title}
                    />
                    <p>{activity.date}</p>
                    <p>
                        Hosted by <strong>Bob</strong>
                    </p>
                </CardContent>
            </CardContent>
            <CardContent >
                <Button color='primary'>Join Activity</Button>
                <Button color='error'>Cancel attendance</Button>
                <Button color='secondary'>
                    Manage Event
                </Button>
            </CardContent>
        </Card>
    )
})
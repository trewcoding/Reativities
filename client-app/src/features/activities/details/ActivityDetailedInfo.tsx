import { Card, CardContent, Grid, Icon } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import RoomIcon from '@mui/icons-material/Room';

interface Props {
    activity: Activity
}

export default observer(function ActivityDetailedInfo({ activity }: Props) {
    return (
        <Card>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item xs={2}>
                        <Icon component={InfoIcon} />
                    </Grid>
                    <Grid xs={10}>
                        <p>{activity.description}</p>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item xs={2}>
                        <Icon component={EventIcon} />
                    </Grid>
                    <Grid xs={10}>
                        <span>
                            {activity.date}
                        </span>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item xs={2}>
                        <Icon component={RoomIcon} />
                    </Grid>
                    <Grid xs={10}>
                        <span>{activity.venue}, {activity.city}</span>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
})
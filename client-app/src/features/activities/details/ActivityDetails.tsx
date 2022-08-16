import { Grid } from '@mui/material'
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store'
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSideBar';



export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent content='Loading'/>;

    return (
        <Grid container={true} spacing={2}>
            <Grid item xs={8}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat />
            </Grid>
            <Grid item xs={4}>
                <ActivityDetailedSidebar />
            </Grid>
        </Grid>
    )
})
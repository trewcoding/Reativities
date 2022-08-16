import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    
    const {activityStore} = useStore();
    const {loadActivites, activityRegistry} = activityStore

    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivites();
    }, [activityRegistry.size, loadActivites])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />
    
    return (
        <Grid container spacing={2} padding={5}>
            <Grid item xs={8}>
                <ActivityList/>
            </Grid>
            <Grid item xs={4}>
                <ActivityFilters />
            </Grid>
        </Grid>

    )
})
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    
    return (
        <Grid columnSpacing={10} container spacing={2} padding={5}>
            <Grid item xs={8}>
                <ActivityList/>
            </Grid>
            <Grid item xs={4}>
                {selectedActivity && !editMode &&
                    <ActivityDetails/>}
                {editMode &&
                    <ActivityForm
                    />}
            </Grid>
        </Grid>

    )
})
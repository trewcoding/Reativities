import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Card, CardHeader, List, Typography } from '@mui/material';
import ActivityListItem from './ActiviityListItem';
import { Fragment } from 'react';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <CardHeader title={group}>
                    </CardHeader>
                        {activities.map(activity => (
                            <ActivityListItem key={activity.id} activity={activity} />
                        ))}
                </Fragment>
            ))}
        </>

    )
})
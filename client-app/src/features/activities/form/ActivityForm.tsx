import { Box, Button, ButtonGroup, FormGroup, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ChangeEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store'; import { observer } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { v4 as uuidV4 } from 'uuid';

export default observer(function ActivityForm() {
    const history = useHistory();
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    function handleSubmit() {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuidV4()
            };
            createActivity(newActivity).then(() =>
                history.push(`/activities/${newActivity.id}`))

        } else {
            updateActivity(activity).then(() =>
                history.push(`/activities/${activity.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target
        setActivity({ ...activity, [id]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading, hold your horses' />

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
                '& .MuiButtonGroup-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <FormGroup>
                <TextField
                    id="title"
                    label="Title"
                    value={activity.title}
                    onChange={handleInputChange}
                />
                <TextField
                    id="description"
                    label="Description"
                    value={activity.description}
                    onChange={handleInputChange}
                />
                <TextField
                    id="category"
                    label="Category"
                    value={activity.category}
                    onChange={handleInputChange}
                />
                <TextField
                    id="date"
                    label="Date"
                    type='date'
                    value={activity.date}
                    onChange={handleInputChange}
                />
                <TextField
                    id="city"
                    label="City"
                    value={activity.city}
                    onChange={handleInputChange}
                />
                <TextField
                    id="venue"
                    label="Venue"
                    value={activity.venue}
                    onChange={handleInputChange}
                />
                <ButtonGroup>
                    <LoadingButton loading={loading} onClick={handleSubmit} type='submit' color='success'>Submit</LoadingButton>
                    <Button href={`/activities`} color='error'>Cancel</Button>
                </ButtonGroup>
            </FormGroup>
        </Box>

    )
})
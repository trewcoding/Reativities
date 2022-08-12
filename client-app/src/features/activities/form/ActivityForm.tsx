import { Box, Button, ButtonGroup, FormGroup, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ChangeEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';import { observer } from 'mobx-react-lite';

export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

    const initalState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initalState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target
        setActivity({ ...activity, [id]: value })
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1},
                '& .MuiButtonGroup-root': { m: 1},
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
                <Button onClick={closeForm} color='error'>Cancel</Button>
            </ButtonGroup>
            </FormGroup>
        </Box>

    )
})
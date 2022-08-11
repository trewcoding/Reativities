import { Button, ButtonGroup, FormControl, FormGroup, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {

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

    function handleSubmit () {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {id, value} = event.target
        setActivity({...activity, [id]: value})
    }

    return (
        <FormGroup>
            <FormControl>
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
                    <Button onClick={handleSubmit} type='submit' color='success'>Submit</Button>
                    <Button onClick={closeForm} color='error'>Cancel</Button>
                </ButtonGroup>
            </FormControl>
        </FormGroup>
    )
}
import { Backdrop, CircularProgress, TextField } from "@mui/material";

interface Props {
    inverted?: boolean;
    content: string;
}

export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    return (
        <Backdrop open={true}>
            <CircularProgress variant="indeterminate"/>
            <TextField
                value={content}
            />
        </Backdrop>
    )
}
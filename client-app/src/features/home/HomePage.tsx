import { Container, Link } from '@mui/material';

export default function HomePage() {
    return (
        <Container sx={{marginTop: '7em'}}>
            <h1>Home Page</h1>
            <h3>Go to <Link href='/activities'>Activities</Link></h3>
        </Container>
    )
}
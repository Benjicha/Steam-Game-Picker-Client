import { Link } from 'react-router-dom';
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
  } from '@mui/material';
const Home = () => {
    return (
        <div className='landing-page'>
        <Container sx={{minHeight: '100%'}}>
            <Typography variant="h2" gutterBottom>
                Welcome to My Game Site!
            </Typography>
            <Typography variant="body1" paragraph>
                Discover and explore a world of amazing Steam games.
            </Typography>

            {/* Features Section */}
            <Grid container spacing={3} sx={{my: 5}}>
                <Grid item xs={12} md={4}>
                <Card elevation={8}>
                    <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Get Steam Games
                    </Typography>
                    <Typography variant="body2">
                        Explore a vast collection of Steam games available on our site.
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                <Card elevation={8}>
                    <CardContent>
                    <Typography variant="h5" gutterBottom>
                        View Games
                    </Typography>
                    <Typography variant="body2">
                        Browse through the games in our catalog and find your favorites.
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                <Card elevation={8}>
                    <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Random Games
                    </Typography>
                    <Typography variant="body2">
                        Feeling lucky? Generate a random game by genre or category.
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>

            {/* Call to Action */}
            <Typography variant="h4" align="center" gutterBottom>
                Ready to explore?
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/games"
                sx={{mt:3}}
            >
                View Games
            </Button>
        </Container>
        </div>
    )
};
export default Home;
import { AppBar, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <AppBar>
            <nav className="navbar-div">
                <Button color="inherit" component={Link} to ="/"><Typography variant="h4">Home</Typography></Button>
                <Button color="inherit" component={Link} to ="/Games"><Typography variant="h4">Games</Typography></Button>
                <Button color="inherit" component={Link} to ="/Random"><Typography variant="h4">Random</Typography></Button>
            </nav>
        </AppBar>
    );
};
export default Navbar;
import { Games, Dictionary } from "steam-games";
import { getRandomGame } from "../services/api";
import { useState, useEffect } from 'react';
import { CircularProgress } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Chip,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from '@mui/material';
  import { Event, Money } from '@mui/icons-material';

const genreOptions: Dictionary<string>[] = [{"all": "All Categories"}, {"fps": "FPS"}, {"action": "Action"}]
const categoryOptions: Dictionary<string>[] = [{"single": "Single Player"}, {"multi": "Multiplayer"}, {"coop": "CO-OP"}]

const RandomGame = () => {
    const [game, setGame] = useState<Games | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [genre, setGenre] = useState<string>("all");
    const [category, setCategory] = useState<string>("single");

    const HandleNewGame = () => {
        setIsLoaded(false);
        getRandomGame().then((res) => {
            setGame(res);
            setIsLoaded(true);
        });
    };
    const handleGenreChange = (e: SelectChangeEvent<string>) => {
        const val = e.target.value;
        setGenre(val);
    };
    const handleCategoryChange = (e: SelectChangeEvent<string>) => {
        const val = e.target.value;
        setCategory(val);
    };
    useEffect(() => {
        HandleNewGame();
    }, [])
    if (!isLoaded) {
        return (
            <CircularProgress />
        );
    }
    else if (game) {
        return (
            <Card>
            <CardMedia
              component="img"
              height={250}
              image={game.image}
              alt={game.name}
            />
            <CardContent>
              <Typography variant="h4" component="div" sx={{m:2}}>
                {game.name}
              </Typography>
              <Typography color="text.secondary" sx={{mb:2}}>
                Genres: {game.genres}
              </Typography>
              <Typography color="text.secondary" sx={{mb:2}}>
                Categories: {game.categories}
              </Typography>
              <Chip
                icon={<Event />}
                label={`Released: ${game.release}`}
                variant="outlined"
                sx={{mr:2}}
              />
              <Chip
                icon={<Money />}
                label={`Price: ${game.price} ${game.currency}`}
                variant="outlined"
                sx={{ml:2}}
              />
            </CardContent>
            <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <FormControl sx={{ minWidth: 120, margin: '10px' }}>
                    <InputLabel>Genre</InputLabel>
                    <Select value={genre} onChange={handleGenreChange} sx={{height: 50}}>
                        {genreOptions.map((genre) => {
                            return (
                                <MenuItem value={Object.keys(genre)[0]}>{Object.values(genre)[0]}</MenuItem>
                            )
                        })
                        }
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120, margin: '10px' }}>
                    <InputLabel>Category</InputLabel>
                    <Select value={category} onChange={handleCategoryChange} sx={{height: 50}}>
                        {categoryOptions.map((category) => {
                            return (
                                <MenuItem value={Object.keys(category)[0]}>{Object.values(category)[0]}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </CardContent>
            <Button variant="contained" onClick={HandleNewGame} sx={{m: 3}}>
                Get New Random Game
            </Button>
          </Card>
        )
    } else {
        return (
            <div>
                Something Went Wrong!
            </div>
        )
    }
};
export default RandomGame;
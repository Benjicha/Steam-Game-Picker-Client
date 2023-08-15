import { Games } from "steam-games"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';
import { getGames } from "../services/api";

const GamesOverview = () => {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
      getGames().then((result) => {
          setGames(result);
      });
  }, [])
  if (games.length > 0) {

    const handleChangeGameId = () => {
      console.log("hello!");
      if (games[0].id < games[1].id) {
        setGames(prev => [...prev.sort((a, b) => a.id < b.id ? 1: -1)]);
      } else {
        setGames(prev => [...prev.sort((a, b) => a.id > b.id ? 1: -1)]);
      }
    };
    const handleChangeGameName = () => {
        console.log("hello!");
      if (games[0].name.toLocaleLowerCase() < games[1].name.toLocaleLowerCase()) {
        setGames(prev => [...prev.sort((a, b) => a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? 1: -1)]);
      } else {
        setGames(prev => [...prev.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1: -1)]);
      }
    }
    const handleChangeGameGenre = () => {
        console.log("hello!");
      if (games[0].genres.toLocaleLowerCase() <= games[1].genres.toLocaleLowerCase()) {
        setGames(prev => [...prev.sort((a, b) => a.genres.toLocaleLowerCase() < b.genres.toLocaleLowerCase() ? 1: -1)]);
      } else {
        setGames(prev => [...prev.sort((a, b) => a.genres.toLocaleLowerCase() > b.genres.toLocaleLowerCase() ? 1: -1)]);
      }
    }
    const handleChangeGameCategory = () => {
        console.log("hello!");
      if (games[0].categories.toLocaleLowerCase() <= games[1].categories.toLocaleLowerCase()) {
        setGames(prev => [...prev.sort((a, b) => a.categories.toLocaleLowerCase() < b.categories.toLocaleLowerCase() ? 1: -1)]);
      } else {
        setGames(prev => [...prev.sort((a, b) => a.categories.toLocaleLowerCase() > b.categories.toLocaleLowerCase() ? 1: -1)]);
      }
    }
    const handleChangeGamePrice = () => {
        console.log("hello!");
      if (games[0].price <= games[1].price) {
        setGames(prev => [...prev.sort((a, b) => a.price < b.price ? 1: -1)]);
      } else {
        setGames(prev => [...prev.sort((a, b) => a.price > b.price ? 1: -1)]);
      }
    }
    return (
      <Paper sx={{maxWidth: '100%', overflow: 'hidden'}}>
        <TableContainer sx={{maxHeight: '95vh'}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>Index</TableCell>
            <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}><Button onClick={handleChangeGameId} sx={{minWidth: '100%', minHeight: '100%'}}>Game Id</Button></TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}><Button onClick={handleChangeGameName} sx={{minWidth: '100%', minHeight: '100%'}}>Game</Button></TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}><Button onClick={handleChangeGameGenre} sx={{minWidth: '100%', minHeight: '100%'}}>Genre</Button></TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}><Button onClick={handleChangeGameCategory} sx={{minWidth: '100%', minHeight: '100%'}}>Category</Button></TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}><Button onClick={handleChangeGamePrice} sx={{minWidth: '100%', minHeight: '100%'}}>Price</Button></TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}>Currency</TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}>Release Date</TableCell>
            <TableCell align="center"sx={{minwidth:'150px', maxWidth: '300px'}}>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game, index) => (
            <TableRow
              key={game.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(even)': {backgroundColor: '#D3D3D3'} }}
            >
              <TableCell component="th" scope="row" align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>
                {index+1} 
              </TableCell >
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.id}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.name}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.genres}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.categories}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.price}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.currency}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}>{game.release}</TableCell>
              <TableCell align="center" sx={{minwidth:'150px', maxWidth: '300px'}}><img src={game.image} style={{width: '300px', height:'150px'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    )
          }
}
export default GamesOverview;
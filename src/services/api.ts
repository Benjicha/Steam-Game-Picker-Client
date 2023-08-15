import axios from 'axios';
import { Games } from 'steam-games';

const BASE_URL = 'http://localhost:5000';

export const getGames = async () => {
    try {
        const response = await axios.get<Games[]>(`${BASE_URL}/Games`);
        return response.data;
    } catch (error) {
        throw error
    }
};

export const getRandomGame = async () => {
    try {
        const response = await axios.get<Games>(`${BASE_URL}/Game/Random/`);
        return response.data
    } catch (error) {
        throw error
    }
;}
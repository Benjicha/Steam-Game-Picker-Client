declare module 'steam-games' {
    interface Games {
        id: number;
        name: string;
        genres: string;
        categories: string;
        price: number;
        currency: string;
        release: string;
        image: string;
    }
    interface Dictionary<T> {
        [key: string]: T;
    }
}
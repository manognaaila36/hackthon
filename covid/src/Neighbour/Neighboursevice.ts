import axios from 'axios';

export interface NeighbourResponse {
    country: string;
    Neighbour: number;
}

export const getResponse = async (location: string): Promise<NeighbourResponse> => {
    try {
        const results = await axios.get(`https://disease.sh/v3/covid-19/all`);
        const date = Object.keys(results.data.timeline)[0];
        const Neighbour = results.data.timeline[date];
        return {
            country: results.data.country,
            Neighbour: Neighbour
        };
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};

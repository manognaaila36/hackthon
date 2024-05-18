import React, { useEffect, useState } from "react";
import { getResponse, NeighbourResponse } from './Neighboursevice';

export const Neighbour: React.FC = (): JSX.Element => {
    const [location, setLocation] = useState<string>("India");
    const [NeighbourResponse, setNeighbourResponse] = useState<NeighbourResponse | undefined>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const result = await getResponse(location);
                setNeighbourResponse(result);
            } catch (error) {
                console.error('Error fetching COVID data:', error);
                setError('Error fetching COVID data');
            }
        };
        fetchResponse();
    }, [location]);

    return (
        <div className="a">
            <h2>Neighbours</h2>
            
            
            {NeighbourResponse && (
                <> 
                    <p>Country : {NeighbourResponse.country}</p>
                    
                    
                </>
            )}
        </div>
    );
};
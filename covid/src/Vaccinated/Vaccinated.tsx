import React, { useEffect, useState } from "react";
import { getResponse, VaccinatedResponse } from './VaccinatedService';

export const Vaccinated: React.FC = (): JSX.Element => {
    const [location, setLocation] = useState<string>("India");
    const [VaccinatedResponse, setVaccinatedResponse] = useState<VaccinatedResponse | undefined>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const result = await getResponse(location);
                setVaccinatedResponse(result);
            } catch (error) {
                console.error('Error fetching COVID data:', error);
                setError('Error fetching COVID data');
            }
        };
        fetchResponse();
    }, [location]);

    return (
        <div className="a">
            <h2>Total No Of Vaccinated</h2>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="USA">USA</option>
                <option value="Albania">Albania</option>
                <option value="India">India</option>
                <option value="China">China</option>
            </select>
            
            {VaccinatedResponse && (
                <> 
                    <p>Country : {VaccinatedResponse.country}</p>
                    <p>Vaccinated : {VaccinatedResponse.Vaccinated}</p>
                    
                </>
            )}
        </div>
    );
};
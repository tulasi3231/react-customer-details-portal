import React, { useState, useEffect } from 'react';

interface Props {
    customerId: number | null;
}

interface Photo {
    id: number;
    url: string;
}

export const CustomerDetails: React.FC<Props> = ({ customerId }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const newPhotos: Photo[] = [];
                // Fetch 9 new photos
                for (let i = 0; i < 9; i++) {
                   
                    const url = `https://source.unsplash.com/random/300x300?sig=${Math.random()}`;
                    const photo: Photo = {
                        id: i,
                        url: url
                    };
                    newPhotos.push(photo);
                }
                // Update the state with the new photos
                setPhotos(newPhotos);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();

        const intervalId = setInterval(fetchPhotos, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="customer-details">
            {customerId !== null ? (
                <div>
                    <h2>Customer Details</h2>
                    <p>Customer ID: {customerId}</p>
                    <h3>Photos</h3>
                    <div className="photo-grid">
                        {photos.map(photo => (
                            <img key={photo.id} src={photo.url} alt={`Random Photo ${photo.id}`} width={300} height={300} />
                        ))}
                    </div>
                </div>
            ) : (
                <p>Please select a customer</p>
            )}
        </div>
    );
};

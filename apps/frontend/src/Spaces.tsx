import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    background: '#fff'
};

const thumbnailStyle: React.CSSProperties = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '12px'
};

const Spaces = () => {
    const token = localStorage.getItem('token');
    const [spaces, setSpaces] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login');
        }
        fetchSpaces(); 
    }, [])

    const fetchSpaces = async () => {
        const response = await fetch('http://localhost:3000/api/v1/space/all', {
            method: 'GET',
        })
        const data = await response.json();
        if (response.ok) {
            setSpaces(data.spaces); // Use data.spaces
        } else {
            console.error('Error fetching spaces:', data);
        }
    }

    return (
        <div>
            {spaces.map((space: any) => (
                <div key={space.id} style={cardStyle}>
                    {space.thumbnail && (
                        <img src={space.thumbnail} alt={space.name} style={thumbnailStyle} />
                    )}
                    <h2>{space.name}</h2>
                    <p>Dimensions: {space.dimensions}</p>
                    <button onClick={() => navigate(`/game?token=${token}&spaceId=${space.id}`)}>
                        Join
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Spaces
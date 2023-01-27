import { useEffect, useState } from 'react';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/task');
                const data = await res.json();
                setItems(data.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {items.map(item => (
                <div key={item._id}>{item.name} && {item.description}</div>
            ))}
        </div>
    );
};

export default Items;
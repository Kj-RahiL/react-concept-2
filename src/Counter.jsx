import { useState } from "react"

export default function Counter() {
    const [count, setItem] = useState(0);

    const handleAdd = () =>{
        const newItem = count + 1;
        setItem(newItem)
    }
    const handleRemove = () =>{
        setItem(count - 1)
    }

    const countStyle = {
        border: '2px solid purple',
        padding: '15px',
        margin: "15px",
        borderRadius: "8px"
    }
    return (
        <div style={countStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
} 
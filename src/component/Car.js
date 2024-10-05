import { useState } from 'react'
export default function Car() {
    const [car, setCar] = useState({ name: 'Toyota', color: 'red', year: 2020 });
    const [input, setInput] = useState('');


    return (
        <>
            Show information of Car: {car.name} - {car.color} - {car.year}
            <br />
            Update Year of Car: <input value={input} onChange={(e) => setInput(e.target.value)} type="number" />
            <input onClick={() => setCar({ ...car, year: input })} type="button" value="Update Year" />
        </>
    )
}
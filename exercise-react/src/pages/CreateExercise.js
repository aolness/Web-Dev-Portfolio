import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


export const CreateExerciesPage = () => {

    const [name, setName] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('lbs')
    const [date, setDate] = useState('')

    const history = useHistory()

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 201) {
            alert('Successfully added exercise')
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`)
        }
        history.push('/')
    }

    return (
        <div>
            <h1>Log Exercise</h1>
            <input
                type="text"
                placeholder='Lift'
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder='Reps'
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder='Weight'
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select onChange={e => setUnit(e.target.value)}>
                <option value='lbs'>lbs</option>
                <option value='Kg'>Kg</option>
                <option value='Newtons'>Newtons</option>               
            </select>
            <input
                type="date"
                value={date}
                required
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}>
            Add</button>
        </div>
    )
}

export default CreateExerciesPage
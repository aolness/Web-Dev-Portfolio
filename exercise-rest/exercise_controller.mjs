import * as exercise from './exercise_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

app.post('/exercises', (req, res) => {
    exercise.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request failed'})
        })
})

app.get('/exercises/:_id', (req, res) => {
    const exerciseID = req.params._id;
    exercise.findExerciseById(exerciseID)
        .then(exercise => {
            if(exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({Error: 'Request failed'})
        })
})

app.get('/exercises', (req, res) => {
    let filter = {}
    exercise.findExercise(filter, '', 0)
        .then(exercise => {
            res.send(exercise)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({Error: 'Request failed'})
        })
})

app.put('/exercises/:_id', (req, res) => {
    exercise.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
            } else {
                res.status(404).json({Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request failed'})
        })
})

app.delete('/exercises/:_id', (req, res) => {
    exercise.deleteById(req.params._id)
        .then(deletedCount => {
            if(deletedCount === 1) {
                res.status(204).send()
            } else {
                res.status(404).json({Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({Error: "Request failed"})
        })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateExercisePage from './pages/CreateExercise'
import EditExercisePage from './pages/EditExercise'
import Navigation from './components/Navigation';
import Foot from './components/Foot'
import {useState} from 'react'



function App() {
  
  const [exerciseToEdit, setExerciseToEdit] = useState()


  return (
  
    <div className="App"> 
      <Router>
        <header className="App-header">
          <h1>Lifting Buddy</h1>
          <p>Your virtual weight room friend! </p>
        </header>

        <Navigation />
        <main>
          <Route path='/' exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path = '/add-exercise'>
            <CreateExercisePage/>
          </Route>
          <Route path = '/edit-exercise'>
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>
        </main>

        <footer>
          <Foot time = {Date()}/>
        </footer>
      </Router>
    </div>

  );
}

export default App;

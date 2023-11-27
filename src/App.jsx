import React, { useEffect, useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  //
  const [searchString, setSearchString] = useState('')

  //Valor real de todas mis tareas actualmente
  const [tasks, setTasks] = useState([])

  //Tareas que muestro
  const [currentTasks, setCurrentTask] = useState([])

  //Ver si se muestran las tareas completadas. "setShowCompleted" actualiza el estado 
  const [showCompleted, setShowCompleted] = useState(true)

  //Ver si las tareas pendientes se muestran
  const [showPending, setShowPending] = useState(true)

  //Elimina Tareas
  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))
  }

  //Agrega una nueva Tarea
  const addTask =  (newTask) =>{
    setTasks([...tasks, newTask])
  }

  //Marcar las Tareas Completadas
  const markTaskAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task))
  }

  //Desmarcar Tares Completadas
  const unmarkTaskAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: false } : task))       
  }

//Busqueda de tareas
useEffect(() => {
  setCurrentTask(
    tasks.filter((task) => {

      //Convertir los textos en minuscula, para poder realizar la busqueda sin importar las mayusculas
      const lowerCaseSearch = searchString.toLowerCase()
      const lowerCaseTitle = task.title.toLowerCase()

      //Filtrado de tareas
      const titleMatch = lowerCaseTitle.includes(lowerCaseSearch)
      const statusMatch =
        (showCompleted && task.completed) ||
        (showPending && !task.completed)

      // Si ningun checkbox esta marcado, mostrar todas las tareas
      if (!showCompleted && !showPending) {
        return titleMatch
      }

      return titleMatch && statusMatch;
    })
  );
}, [searchString, tasks, showCompleted, showPending])

const handleChangeSearchString = (e) => {
  setSearchString(e.target.value)
};

const toggleShowCompleted = () => {
  setShowCompleted(!showCompleted);
};

const toggleShowPending = () => {
  setShowPending(!showPending)
};


   return (
    <>
      <form>

        <label>Busqueda de tareas:</label>
        <input 
        placeholder='Buscar tareas' 
        onChange={handleChangeSearchString}
        value={searchString}
        />
        
      </form>

      
      <div>
        <label>
          <input
            type='checkbox'
            checked={showCompleted}
            onChange={toggleShowCompleted}
          />
          Tareas Completadas
        </label>
        <label>
          <input
            type='checkbox'
            checked={showPending}
            onChange={toggleShowPending}
          />
          Tareas Pendientes
        </label>
      </div>

      <TaskForm 
        addTask={addTask}
      />

      <TaskList 
        tasks={currentTasks} 

        deleteTask={deleteTask} //Funcion Borrar tarea

        markTaskAsCompleted={markTaskAsCompleted} //Funcion Marcar tarea
      
        unmarkTaskAsCompleted={unmarkTaskAsCompleted} //Funcion Desmarcar tarea
      />
    </>
  )
}

export default App
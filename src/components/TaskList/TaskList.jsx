import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({tasks, deleteTask,  markTaskAsCompleted, unmarkTaskAsCompleted}) => {
  return (
    <div>
        {
        tasks.length === 0 
        ? <h2>Aun no hay tareas agregadas. Por favor agregue una.</h2> 
        : <div>
            {tasks.map(task =>(
                <TaskItem 
                task={task} 
                key={task.id}
                deleteTask={deleteTask} 
                markTaskAsCompleted={markTaskAsCompleted}
                unmarkTaskAsCompleted={unmarkTaskAsCompleted}
                />
            ))}
        </div>
        }
    </div>
  )
}

export default TaskList

  /*
    task: Tarea

    deleteTask: Borar tarea

    markTaskAsCompleted: Marcar tarea completada

    unmarkTaskAsCompleted: Desmarcar tarea completada
  */
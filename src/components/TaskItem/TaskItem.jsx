import React from 'react'
import './TaskItem.css'

const TaskItem = ({ task, deleteTask, markTaskAsCompleted, unmarkTaskAsCompleted }) => {
    return (
      <div>
        <h3 style={{ textDecoration: task.completed ? 'line-through red 2px' : 'none' /*Tarea completada. Tachado*/}}> 
          {task.title}
        </h3>
        
        <p>
          {task.description}
        </p>

        <span>
          {task.createdAt}
        </span>
        
        <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        
        {task.completed ? (
        <button onClick={() => unmarkTaskAsCompleted(task.id)}>
          Desmarcar como Completada
        </button>
      ) : (
        <button onClick={() => markTaskAsCompleted(task.id)}>
          Marcar como Completada
        </button>
      )}
        <hr />
      </div>
    );
  };

  
  export default TaskItem

  /*
    task: Tarea

    deleteTask: Borar tarea

    markTaskAsCompleted: Marcar tarea completada

    unmarkTaskAsCompleted: Desmarcar tarea completada
  */
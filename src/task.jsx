import React from 'react'
import './index.css'
import { Draggable } from 'react-beautiful-dnd'
export default function task({ task, index }) {
  // ! A draggable and droppable expects it's child to be a function.
  return (
    <Draggable draggableId={task.uuid} index={index}>
      {(provided) => (
        <div 
          className='task-container'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
          <div className='transaction-flex'>
            <div className='transaction-narrow'>{task.uuid}</div>
            <div  className='transaction-narrow'>{task.date}</div>
            <div  className='transaction-wide'>{task.comment}</div>
          </div>
        </div>
      )}

    </Draggable>
  )
}

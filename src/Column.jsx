import React from 'react'
import styled from 'styled-components'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'

const Title = styled.h3`
    padding: 8px;
`
const TaskList = styled.div`
    margin: 8px;
`
export default function Column({ column, tasks }) {
    return (
        <div className='column-container'>
            <Title>Transactions</Title>
            <Droppable droppableId="a">
                {(provided) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {tasks.map((task,index) => <Task key={task.uuid} task={task} index={index}></Task>)}
                        {provided.placeholder}
                    </TaskList>
                )}

            </Droppable>
        </div>
    )
}

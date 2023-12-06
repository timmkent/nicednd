import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import initialData from './initial-data';
import initialTransactionData from './initial-transaction-data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { database } from './firebase'
import { ref, onValue, set, remove, update, get } from 'firebase/database'

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  const bank = 'sparda'
  const [data, setData] = useState(initialTransactionData.transactions)
  const [dataOrder, setDataOrder] = useState(initialTransactionData.order)

  useEffect(() => {
    onValue(ref(database, `transactions/${bank}`), (snap) => {
      let array = []
      snap.forEach(element => {
          const item = element.val()
          array.push(item)
      })
      console.log(array)
    })

  },[])
  function onDragEnd(result) {
   
    const { destination, source, draggableId } = result
    // user dropped outside the droppable area
    if (!destination) {
      return
    }
    // user dropped item in the same place where it startet
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // do not update existing order array, that's why we create a new one
    const newTaskIds = Array.from(dataOrder)

    // move taskId from old index to new index in the new array
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId) // 0 insert, do not remove anything.

  
    setDataOrder(newTaskIds)
    // save new order to firebase
  }

 
  

  return (
    
    <DragDropContext
      onDragEnd={onDragEnd}
    > 
      return <Column key={"column.id"} column={"column"} tasks={dataOrder.map(taskId => data[taskId])}></Column>
    </DragDropContext>
  );
}
root.render(
  <App />
);


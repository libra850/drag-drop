import React, {useState} from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskButton } from '../task/button/AddTaskButton';

export const TaskCards = () => {
  // 初期値も追加
  const [taskCardsList, setTaskCardsList] = useState([{id:0, draggableId:"item0"}]);
  return (
    <div className='taskCardsArea'>
      {taskCardsList.map(taskCard => (
        <TaskCard 
          key={taskCard.id}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      ))}
      <AddTaskButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  )
}

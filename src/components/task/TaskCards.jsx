import React, {useState} from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskButton } from '../task/button/AddTaskButton';

export const TaskCards = () => {
  // 初期値も追加
  const [taskCardsList, setTaskCardsList] = useState([{id:0, draggableId:"item0"}]);
  return (
    <div className='taskCardsArea'>
      {taskCardsList.map(taskCardList => (
        <TaskCard key={taskCardList.id}/>
      ))}
      <AddTaskButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  )
}

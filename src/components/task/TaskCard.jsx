import React, { useState } from 'react'
import {TaskCardTitle} from './TaskCardTitle'
import {TaskDeleteButton} from '../task/button/TaskDeleteButton'
import {TaskAddInput} from '../task/input/TaskAddInput'
import {Tasks} from './Tasks'

export const TaskCard = ({taskCardsList, setTaskCardsList,taskCard}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButton'>
        <TaskCardTitle/>
        <TaskDeleteButton
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}

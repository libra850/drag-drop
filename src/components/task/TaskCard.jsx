import React, { useState } from 'react'
import {TaskCardTitle} from './TaskCardTitle'
import {TaskDeleteButton} from '../task/button/TaskDeleteButton'
import {TaskAddInput} from '../task/input/TaskAddInput'
import {Tasks} from './Tasks'

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className='taskCard'>
      <TaskCardTitle/>
      <TaskDeleteButton/>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
      />
    </div>
  )
}

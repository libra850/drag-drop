import React from 'react'
import {TaskCardTitle} from './TaskCardTitle'
import {TaskDeleteButton} from '../task/button/TaskDeleteButton'
import {TaskAddInput} from '../task/input/TaskAddInput'
import {Tasks} from './Tasks'

export const TaskCard = () => {
  return (
    <div className='taskCard'>
      <TaskCardTitle/>
      <TaskDeleteButton/>
      <TaskAddInput/>
      <Tasks/>
    </div>
  )
}

import React, { useState } from 'react'
import {TaskCardTitle} from './TaskCardTitle'
import {TaskDeleteButton} from '../task/button/TaskDeleteButton'
import {TaskAddInput} from '../task/input/TaskAddInput'
import {Tasks} from './Tasks'
import { Draggable } from 'react-beautiful-dnd'

export const TaskCard = ({taskCardsList, setTaskCardsList,taskCard, index}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className='taskCard' {...provided.draggableProps} ref={provided.innerRef}>
          <div className='taskCardTitleAndTaskCardDeleteButton' {...provided.dragHandleProps}>
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
      )}
    </Draggable>
  )
}

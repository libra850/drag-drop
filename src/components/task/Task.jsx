import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

export const Task = ({task, taskList, setTaskList, index}) => {
  const handleDelete  = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    // どのdraggableか判別するためのdraggableID付与
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div className='taskBox'
             key={task.id}
             ref={provided.innerRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          {/* 押された時だけ処理したいので無名関数を入れる */} 
          <button className='taskTrash' onClick={() => handleDelete(task.id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

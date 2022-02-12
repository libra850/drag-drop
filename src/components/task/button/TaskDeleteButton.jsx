import React from 'react'

export const TaskDeleteButton = ({taskCardsList, setTaskCardsList,taskCard}) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i class="fa-solid fa-square-xmark"></i>
      </button>
    </div>
  )
}

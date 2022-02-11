import React from 'react'

export const TaskAddInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add project' className='taskAddInput'></input>
      </form>
    </div>
  )
}

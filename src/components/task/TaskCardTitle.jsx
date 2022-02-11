import React, { useState } from 'react'

export const TaskCardTitle = () => {
  // 状態関数を定義
  const [isClick, setIsClick] = useState(false);
  const [inputTitle, setInputTitle] = useState("TITLE");
  const handleClick = () => {
    setIsClick(true);
  };
  const handleSubmit = (e) => {
    // 更新を防ぎ変更を保持
    e.preventDefault();
    // input状態を変更
    setIsClick(false);
  };
  // 変更内容を保持
  const handleChange = (e) => {
    setInputTitle(e.target.value);
  };
  // enterしなくても保存されるよう変更
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div onClick={handleClick} className="taskTitleInputArea">
      {isClick? <form onSubmit={handleSubmit}>
                  <input className='taskTitleInput'
                         autofocus
                         type="text"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={inputTitle}
                         maxLength = '10'>
                  </input>
                </form>
                :
                <h3>{inputTitle}</h3>}
    </div>
  )
}

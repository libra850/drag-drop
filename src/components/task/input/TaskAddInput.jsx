import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskAddInput = (
  {
    inputText,
    setInputText,
    taskList,
    setTaskList,
  }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    console.log(e)
    if (inputText === ""){
      return;
    }
    // カードを追加する。taskListに追加していく。
    setTaskList([
      ...taskList,
      {
        // 配列の長さをIDにしていく
        id: taskId,
        // 文字列のIDである必要有
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    console.log(...taskList);
    setInputText("");
  };
  const handleChange = (e) => {
    // inputTextに入る状態をsetで更新。consoleで確認
    setInputText(e.target.value);
    console.log(inputText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='add project'
          className='taskAddInput'
          onChange={handleChange}
          maxLength='20'
          // l.21で空白にリセットしたものを毎時読み込ませる
          value={inputText}>
        </input>
      </form>
    </div>
  )
}

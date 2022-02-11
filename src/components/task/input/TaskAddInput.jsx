import React from 'react'

export const TaskAddInput = (
  {
    inputText,
    setInputText,
    taskList,
    setTaskList,
  }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    // カードを追加する。taskListに追加していく。
    setTaskList([
      ...taskList,
      {
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

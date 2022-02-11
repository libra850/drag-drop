import React from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskButton } from '../task/button/AddTaskButton';

export const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskButton />
    </div>
  )
}

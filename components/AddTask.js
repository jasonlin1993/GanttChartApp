// components/AddTask.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/chartSlice";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    // 這裡你可以根據需要來設定任務的其它屬性，例如開始和結束日期
    const newTask = {
      label: taskName,
      start: "2023-11-01", // 這裡是示例日期，應替換為實際的開始日期
      end: "2023-11-02", // 這裡是示例日期，應替換為實際的結束日期
    };

    // 發送 action 更新 Redux store 中的圖表資料
    dispatch(addTask(newTask));

    // 清空輸入框
    setTaskName("");
  };

  return (
    <div>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Enter task name" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;

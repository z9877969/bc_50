const tasks = ["Task-1", "Task-2", "Task-3", "Task-4"];

<>
  {tasks.map((el, idx) => {
    return idx < 2 ? <li>{el}</li> : null;
  })}
  {tasks.length > 2 && <button>More...</button>}
</>;

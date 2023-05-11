import { useDispatch, useSelector } from "react-redux";

// import { changePriority } from "../../redux/todo/todoActions";
import { changeFilter } from "../../redux/todo/todoSlice";
import s from "./PrioritySelect.module.scss";

const PrioritySelect = () => {
  const dispatch = useDispatch();
  const priority = useSelector((state) => state.todo.filter);
  return (
    <select
      name="priority"
      className={s.select}
      onChange={(e) => dispatch(changeFilter(e))}
      value={priority}
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default PrioritySelect;

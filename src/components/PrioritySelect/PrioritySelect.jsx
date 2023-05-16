import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/todo/todoSlice";
import s from "./PrioritySelect.module.scss";
import { selectFilter } from "../../redux/todo/todoSelectors";

const PrioritySelect = () => {
  const dispatch = useDispatch();
  const priority = useSelector(selectFilter);

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

import PropTypes from "prop-types";
import s from "./PrioritySelect.module.scss";

const PrioritySelect = ({ changePriority, priority }) => {
  return (
    <select
      name="priority"
      className={s.select}
      onChange={changePriority}
      value={priority}
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

PrioritySelect.propTypes = {
  changePriority: PropTypes.func.isRequired,
  priority: PropTypes.string,
};

export default PrioritySelect;

import PropTypes from "prop-types";

const selectStyles = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontSize: "24px",
  marginTop: "12px",
  marginBottom: "12px",
};

const PrioritySelect = ({ changePriority, priority }) => {
  return (
    <select
      name="priority"
      style={selectStyles}
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

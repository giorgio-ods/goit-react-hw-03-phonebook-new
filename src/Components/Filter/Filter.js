import PropTypes from "prop-types";

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        Search
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
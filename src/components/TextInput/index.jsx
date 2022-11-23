import "./styles.css";

export default function TextInput(props) {
  const { searchValue, handleChange } = props;
  return (
    <input
      className="text-input"
      value={searchValue}
      onChange={(e) => handleChange(e)}
      type="search"
      placeholder="Type your search"
    />
  );
}

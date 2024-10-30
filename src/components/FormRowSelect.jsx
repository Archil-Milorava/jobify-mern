
const FormRowSelect = ({name, labelText, defaultValue = "", list}) => {
  return (
    <div className="form-row">
  <label htmlFor="jobStatus" className="form-label">
    {labelText || name}
  </label>
  <select name={name} id={name} className="form-select">
    {list.map((status) => {
      return (
        <option key={status} value={status}>
          {status}
        </option>
      );
    })}
  </select>
</div>
  )
}

export default FormRowSelect
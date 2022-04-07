export const Input = (props) => {
    return <div className="form-box">
      <input type="input" className="form-input" required value={props.value} onChange={props.change}/>
      <label htmlFor="name" className="form-label">Название...</label>
      </div>
  }

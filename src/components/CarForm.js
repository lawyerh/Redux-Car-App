function CarForm() {
  return (
    <div className="car-form">
      <form className="car-entry">
        <div className="car-entry__input-group">
          <label htmlFor="Name" className="car-entry__label">
            Car Name
          </label>
          <input className="car-entry__input" name="Name" type="text" />
        </div>
        <div className="car-entry__input-group">
          <label htmlFor="Value" className="car-entry__label">
            Car Value
          </label>
          <input className="car-entry__input" name="Value" type="text" />
        </div>
        <button className="car-entry__submit btn success">Submit</button>
      </form>
    </div>
  );
}

export default CarForm;

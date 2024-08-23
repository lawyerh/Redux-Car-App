import { useDispatch, useSelector } from "react-redux";
import { changeName, changeValue } from "../store";
import { addCar } from "../store";

function CarForm() {
  const carName = useSelector((state) => state.cars.name);
  const carValue = useSelector((state) => state.cars.value);

  const handleNameChange = (e) => dispatch(changeName(e.target.value));
  const handleValueChange = (e) => dispatch(changeValue(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name: carName,
        value: carValue,
      })
    );
  };
  const dispatch = useDispatch();
  return (
    <div className="car-form">
      <form className="car-entry" onSubmit={handleSubmit}>
        <div className="car-entry__input-group">
          <label htmlFor="Name" className="car-entry__label">
            Car Name
          </label>
          <input
            className="car-entry__input"
            onChange={handleNameChange}
            value={carName}
            name="Name"
            type="text"
          />
        </div>
        <div className="car-entry__input-group">
          <label htmlFor="Value" className="car-entry__label">
            Car Value
          </label>
          <input
            className="car-entry__input"
            onChange={handleValueChange}
            value={carValue || ""}
            name="Value"
            type="text"
          />
        </div>
        <button className="car-entry__submit btn success">Submit</button>
      </form>
    </div>
  );
}

export default CarForm;

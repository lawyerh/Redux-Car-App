import { useDispatch } from "react-redux";
import { deleteCarByID } from "../store";

function Card({ carName, value, id }) {

  const dispatch = useDispatch();

  const handleDeletion = () => {
    dispatch(deleteCarByID(id))
  }
  return (
    <div className="card">
      <p className="card__name">{carName}</p>
      <p className="card__price">${value}</p>
      <button onClick={handleDeletion} className="card__delete btn warn">Delete</button>
    </div>
  );
}

export default Card;

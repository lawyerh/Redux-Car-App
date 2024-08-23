import { useDispatch } from "react-redux";
import { deleteCarByID } from "../store";
import { useSelector } from "react-redux";
import { matchedChars } from "../util/matchedChars";
import { useEffect } from "react";

// Displays car information and allows for deleting a car

function Card({ carName, value, id }) {
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  // Anytime searchTerm changes, check for matches
  useEffect(() => {
    handleFindMatchingChars();
  }, []);

  const dispatch = useDispatch();

  const handleDeletion = () => {
    dispatch(deleteCarByID(id));
  };

  const handleFindMatchingChars = () => {
    const matches = matchedChars(searchTerm, carName);
    return matches;
  };
  return (
    <div className="card">
      <p className="card__name">{handleFindMatchingChars()}</p>
      <p className="card__price">${value}</p>
      <button onClick={handleDeletion} className="card__delete btn warn">
        Delete
      </button>
    </div>
  );
}

export default Card;

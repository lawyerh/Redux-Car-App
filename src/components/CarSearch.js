import { changeSearchTerm } from "../store";
import { useDispatch, useSelector } from "react-redux";

function CarSearch() {
  // Allows user to query their vast car collection

  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="car-search">
      <h2 className="heading-2">My Cars</h2>
      {/* form was totally unnecesarry */}
      <form action="" className="search">
        <label htmlFor="search-cars" className="search__label">
          Search
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          name="search-cars"
          className="search__input"
        />
      </form>
    </div>
  );
}

export default CarSearch;

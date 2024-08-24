import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../store";
import Card from "./Card";
import { useEffect } from "react";
// Container for displaying all cars in DB

function CarList() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.carList);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const mapCars = (cars) => {
    return cars.map((car) => (
      <Card carName={car.name} value={car.value} id={car.id} key={car.id} />
    ));
  };

  return (
    <div className="car-list">
      {carList.length ? mapCars(carList) : "No cars"}
    </div>
  );
}

export default CarList;

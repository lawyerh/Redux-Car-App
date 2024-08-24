import { useSelector } from "react-redux";

function CarValue() {
  // Displays value of all cars

  const combinedValue = useSelector(({ cars: { carList, searchTerm } }) => {
    const filteredCars = carList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, car) => {
      return acc + Number(car.value);
    }, 0);
  });
  return (
    <div className="car-value">
      <h2 className="heading-2">Total Value: ${combinedValue}</h2>
    </div>
  );
}

export default CarValue;

function CarList() {
  return (
    <div className="car-list">
      <div className="card">
        <p className="card__name">Ford Maverick</p>
        <p className="card__price">$15000</p>
        <button className="card__delete btn warn">Delete</button>
      </div>
    </div>
  );
}

export default CarList;

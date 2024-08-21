function CarSearch() {
  return (
    <div className="car-search">
      <h2 className="heading-2">My Cars</h2>
      <form action="" className="search">
        <label htmlFor="search-cars" className="search__label">
          Search
        </label>
        <input type="text" name="search-cars" className="search__input" />
      </form>
    </div>
  );
}

export default CarSearch;

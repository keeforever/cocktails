import { useGlobalContext } from "../context";
const SearchBar = () => {
  const {searchValue,searchCocktail} =useGlobalContext()
  return (
    <section className="search__bar-container">
      <h3>Search Your Favorite Cocktail</h3>
      <input type="text"  value={searchValue} onChange={searchCocktail}/>
    </section>
  )
}

export default SearchBar

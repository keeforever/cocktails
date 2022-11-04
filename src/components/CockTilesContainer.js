import CockTailCard from "./CockTailCard"
import { useGlobalContext } from "../context";
import Loading from '../pages/Loading'
import Error from '../pages/Error'

const CockTilesContainer = () => {
  const {isError,isLoading,state} =useGlobalContext()

  if(isLoading){
    return (
      <>
       <Loading/>
      </>
    )
  }
  if(isError){
    return (
      <>
        <Error/>
      </>
    )
  }
  if(state.cocktails.drinks==null){
    return (
      <h1 className="gear item_not_found">No Items were not found.</h1>
    )
  }
  return (
    <>
      <h1 className="cocktails-title">Cocktails</h1>
      <section className="cocktails-container">
      {
        state.cocktails.drinks.map((cocktail,index)=><CockTailCard key={index} cocktail={cocktail}/>)
      }
      </section>
    </>
    
  )
}

export default CockTilesContainer

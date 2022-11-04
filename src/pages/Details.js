import {Link, useParams} from 'react-router-dom';

import useFetch from '../useFetch'
import Loading from './Loading';
import Error from './Error';

const Details = () => {
 
  const {id} =useParams()
  const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const dependencies={searchURL:id}
  const {isLoading,isError,apiData} = useFetch(url,dependencies)
  if (isLoading){
    return (
    <>
    <Loading/>
    </>)
  }
  if (isError){
    return (
    <>
    <Error/>
    </>)
  }
  const {strDrinkThumb,strDrink}=apiData.drinks[0]
  return (
    <section className="details-page">
      <div className="back_home-container">
        <Link className='back_home-btn' to='/'>Back Home</Link>
      </div>
      <div className="cocktail_details">
        <h1 className="details-name">{strDrink}</h1>
        <div className="img-details-container">
          <img src={strDrinkThumb} alt={strDrink} />
          <article className="details-container">
            <DetailsInfo info={apiData}/>
          </article>
        </div>
      </div>
    </section>
  )
}
export default Details

const DetailsInfo=({info})=>{
  
  const {strInstructions,strDrink,strCategory,strAlcoholic,strGlass}=info.drinks[0]
  const {strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7}=info.drinks[0]


  return(
    <>
      <div className="info-container">
        <h3 className='info-para'>
        <span className="info-title">Name :</span>

          {strDrink}</h3>
      </div>
      <div className="info-container">
        <h3 className='info-para'>
        <span className="info-title">Category :</span>

          {strCategory}</h3>
      </div>
      <div className="info-container">
        <h3 className='info-para'>
        <span className="info-title">Info :</span>

          {strAlcoholic}</h3>
      </div>
      <div className="info-container">
        <h3 className='info-para'>
        <span className="info-title">Glass :</span>

          {strGlass}</h3>
      </div>
      <div className="info-container">
        <h3 className='info-para'>
        <span className="info-title">Instructions :</span>

          {strInstructions}</h3>
      </div>
      <div className="info-container">
        <h3 className='info-para'>
        <span className="info-title">Ingredients :</span>
          {
          [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7]
        }</h3>
      </div>
    </>
  )
}
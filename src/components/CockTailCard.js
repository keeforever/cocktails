import {Link} from 'react-router-dom';

const CockTailCard = ({cocktail}) => {
  const {strDrink,strGlass,strAlcoholic,strDrinkThumb,idDrink}=cocktail;
  return (
    <article className="cocktail-card">
      <div className="cocktail-img">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <h3 className="cocktail-name">{strDrink}</h3>
      <h4 className="glass-name">{strGlass}</h4>
       <p className="cocktail-info">{strAlcoholic}</p>
       <Link className='detail-btn' to={`/details/${idDrink}`} >Details</Link>
    </article>
  )
}

export default CockTailCard

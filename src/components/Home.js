import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CockTilesContainer from "./CockTilesContainer";
import Details from '../pages/Details'
import About from '../pages/About'
import NoMatch from '../pages/NoMatch'

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
const Home = () => {
  return (
      <section className="app-container">
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <>
              <SearchBar/>
              <CockTilesContainer/>
            </>
          }>
          </Route>
          <Route  path='/details/:id' element={<Details/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </section>
  )
}

export default Home

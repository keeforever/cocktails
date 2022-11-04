import Home from './components/Home';
import {BrowserRouter as Router,Link,Route, Routes} from 'react-router-dom'
import { AppProvider } from './context';
function App() {
  

  return (
    <Router>
      <AppProvider>
        <main>
          <Home/>
        </main>
      </AppProvider>
    </Router>
  );
}

export default App;

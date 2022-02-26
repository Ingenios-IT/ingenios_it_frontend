import { Route,Routes, BrowserRouter} from "react-router-dom";
import App from './components/App'

function ROUTES (){
  
      return(
        <BrowserRouter>
          <Routes>
                <Route exact path="" element={<App />} />
          </Routes>
        </BrowserRouter>
      )
  }
  
  export default ROUTES;
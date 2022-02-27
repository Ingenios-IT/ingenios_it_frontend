import { Route,Routes, BrowserRouter} from "react-router-dom";
import App from './components/App'
import Test from './containers/test'

function ROUTES (){
  
      return(
        <BrowserRouter>
          <Routes>
                <Route exact path="" element={<App />} />
                <Route exact path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      )
  }
  
  export default ROUTES;
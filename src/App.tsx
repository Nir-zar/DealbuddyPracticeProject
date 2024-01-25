import "./App.css";
import { store } from "./app/store";
import { Router } from "./route";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


function App() {
  return(
    <Provider store={store}>
   <Router /> 
   </Provider>
  );
}

export default App;

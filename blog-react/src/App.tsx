import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";

export function App(){
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
    </>
  )
}
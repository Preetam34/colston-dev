import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "container/LandingPage";
import PrivateRoutes from "Routes/PrivateRoutes";
import PrivacyPolicy from "container/PrivacyPolicy";
import ProductPage from "container/ProductPage";
import { ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css";
import './App.css'
import theme from "./theme";
import {
  LANDING_PAGE,
  PRIVACY_POLICY,
  PRODUCT_PAGE

} from "Routes/Routes";




const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />

            <Route path={PRIVACY_POLICY} element = {<PrivacyPolicy />} />

            {/* private routes below */}

           <Route
              path={PRODUCT_PAGE}
              element={<PrivateRoutes Component={ProductPage} />}
            /> 


            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};



export default App;

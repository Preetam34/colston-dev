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
import "./App.css";
import theme from "./theme";
import {
  LANDING_PAGE,
  PRIVACY_POLICY,
  PRODUCT_PAGE,
  PRODUCT_DETAIL,
  BRAND_PAGE,
  BRAND_PAGE_ID
} from "Routes/Routes";
import ProductDetail from "container/ProductDetail/ProductDetail";
import BrandPage from "container/BrandPage";
import BrandDetail from "container/BrandDetail"
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />

            {/* private routes below */}

            <Route
              path={PRODUCT_PAGE}
              element={<PrivateRoutes Component={ProductPage} />}
            />

            <Route
              path={PRODUCT_DETAIL}
              element={<PrivateRoutes Component={ProductDetail} />}
            />

            <Route
              path={PRIVACY_POLICY}
              element={<PrivateRoutes Component={PrivacyPolicy} />}
            />

            <Route
              path={BRAND_PAGE}
              element={<PrivateRoutes Component={BrandPage} />}
            />
            <Route
              path={BRAND_PAGE_ID}
              element={<PrivateRoutes Component={BrandDetail} />}
            />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

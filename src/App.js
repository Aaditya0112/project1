
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Cart from "./pages/Cart";
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/Nopage';
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (<>

    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* index means default  */}
              <Route path="cart" element = {<Cart />}  />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> 
              {/* * means any other path */}
            </Route>
          </Routes>
      </BrowserRouter>
    </ShopContextProvider>

    

      </>
  )

}

export default App;

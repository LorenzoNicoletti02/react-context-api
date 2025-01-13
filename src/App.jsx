import AppLayout from "./components/AppLayout";
import HomeComponent from "./components/pages/HomeComponent";
import ChiSiamo from "./components/pages/ChiSiamo";
import ListaPost from "./components/pages/ListaPost";
import PostDetail from "./components/pages/postDetail";
import NotFound from "./components/pages/NotFound";
import GlobalContext from "./contexts/GlobalContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const NavMenu = [
    {
      path: "/",
      title: "Home",
    },

    {
      path: "/ChiSiamo",
      title: "Chi Siamo",
    },

    {
      path: "/ListaPost",
      title: "Lista Post",
    },
  ];

  const globalProviderValue = { NavMenu };

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/ListaPost">
              <Route index element={<ListaPost />} />
              <Route path=":id" element={<PostDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage";
import NewEntryPage from "./pages/NewEntryPage";
import NewExitPage from "./pages/NewExitPage";
import SingUpPage from "./pages/SingUpPage";
import UserProvider from "./contexts/userContext";

function App() {
  return (

    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SingUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<NewEntryPage />} />
          <Route path="/nova-saida" element={<NewExitPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>

  );
}

export default App;
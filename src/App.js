// App.js sert à gérer le routing des pages à afficher
import {Route, Routes} from "react-router-dom"; //Route est l'élément qui gère les Routes pour le différentes pages à afficher. Switch permet de n'afficher qu'une page à la fois.
import EmailListPage from "./pages/emailListPage"
import EmailPage from "./pages/emailPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<EmailListPage  />} />
        <Route path="/email" element={<EmailPage  />} />
      </Routes>
    </div>
  );
}

export default App;

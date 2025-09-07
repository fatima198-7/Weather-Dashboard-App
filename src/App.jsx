import Favourites from "./components/Favourites";
import Navbar from "./components/Navbar";
import SearchHistory from "./components/SearchHistory";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <Navbar />
      <Weather />
      <div className="container sty  w-100 px-0 mt-2">
        <Favourites />
        <SearchHistory />
      </div>
    </>
  );
}

export default App;

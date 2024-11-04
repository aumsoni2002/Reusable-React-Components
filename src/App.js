import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>

        {/* we want the dropdown to be shown at localhost:3000/ */}
        <Route path="/">
          <DropdownPage />
        </Route>

        <Route path="/button">
          <ButtonPage />
        </Route>

        <Route path="/modal">
          <ModalPage />
        </Route>

        <Route path="/table">
          <TablePage />
        </Route>

        <Route path="/counter">
          <CounterPage initialCount={1} />
        </Route>
      </div>
    </div>
  );
}
export default App;

import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";

function App() {
  return (
    <>
      <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[5, 6, 7, 8, 9]} />
    </>
  );
}

export default App;

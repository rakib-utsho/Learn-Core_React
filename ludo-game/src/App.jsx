import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
import { sum } from "./helper";

function App() {
  let winingCondition = (ticket) => {
    return ticket[0] === 0;
  };
  return (
    <>
      <Lottery n={3} winCondition={winingCondition} />
    </>
  );
}

export default App;

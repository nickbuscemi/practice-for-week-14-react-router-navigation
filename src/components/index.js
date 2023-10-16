import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Stocks() {
  const history = useHistory();

  console.log(history);
  const loggedIn = true;

  if (!loggedIn) {
    return <Redirect to="/not-logged-in" />;
  }

  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };

  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;

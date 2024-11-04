import { produce } from "immer"; // immer is a Javascript library with which we can directly change the value of a state. we must use immer to change a state's value directly.
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  if (action.type === "increment-count") {
    // making use of immer:
    state.count = state.count + 1;
    // return {
    //   ...state,
    //   count: state.count + action.payload,
    // };
  } else if (action.type === "decrement-count") {
    return {
      ...state,
      count: state.count - action.payload,
    };
  } else if (action.type === "set-value-to-add") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  } else if (action.type === "handle-submit") {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0,
    };
  } else {
    // if any of the above action type does not match, we will return the state as it is without changing the its values
    return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    // we just need to wrap the reducer function inside the produce() function to make use of immer for changing the values of state directly
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment-count",
      payload: 1,
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement-count",
      payload: 1,
    });
  };

  const handleValueChange = (event) => {
    // when we take the value by doing the event.target.value, it is showing the value is of string data-type. so we need to parse it into int.
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: "set-value-to-add",
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "handle-submit",
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}> Increment </Button>
        <Button onClick={decrement}> Decrement </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          onChange={handleValueChange}
          value={state.valueToAdd || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;

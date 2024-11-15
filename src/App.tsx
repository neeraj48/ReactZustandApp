import "./App.css";
// import CounterValue from "./page/counter/counterValue";
// import ManageCounter from "./page/counter/manageCounter";
import RecipesPage from "./page/Recipes";
function App() {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-yellow-400 text-center font-bold">
          React Zustand App
        </h1>
        <div className="">
          {/* <CounterValue /> */}
          {/* <ManageCounter /> */}
          <RecipesPage />
        </div>
      </div>
    </>
  );
}

export default App;

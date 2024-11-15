import useCounter from "../../store/useConter";

const CounterValue = () => {
  const countValue = useCounter((state:any) => state.countValue);

  return (
    <div>
      <h3>Counter Value: {countValue}</h3>
    </div>
  );
};

export default CounterValue;

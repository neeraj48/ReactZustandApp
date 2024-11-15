import { Button } from "@mui/material";
import useCounter from "../../store/useConter";

const ManageCounter = () => {
  const handleIncrementCount = useCounter(
    (state: any) => state.handleIncrementCount
  );
  return (
    <div>
      <Button variant="contained" onClick={handleIncrementCount}>
        Increase Counter Value
      </Button>
    </div>
  );
};

export default ManageCounter;

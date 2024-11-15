import { useEffect, useState } from "react";
import useCounter, { useActions } from "../../store/useConter";
import { Box, Button, Modal, Typography } from "@mui/material";

const RecipesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, detailData } = useCounter((state: any) => state);
  const { fetchApiData, fetchApiDatabyId } = useActions();
  console.log(detailData);

  const handleDetails = (item: any) => {
    fetchApiDatabyId(`https://dummyjson.com/recipes/${item?.id}`);
    setIsOpen(true);
  };
  useEffect(() => {
    fetchApiData("https://dummyjson.com/recipes");
  }, []);

  return (
    <div className="w-full bg-white">
      <h1>Recipes Lest Page</h1>
      <div>
        <Modal open={isOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "30%",
              height: '80%',
              width: '40%',
              // bgcolor: "white",
              boxShadow: 24,
              textAlign: "center",
            }}
            className="bg-slate-200 rounded-md"
          >
            <img
              src={detailData?.image}
              alt={detailData?.name}
              className="h-[350px] w-full object-cover m-auto shadow-2xl"
            />
            <Typography className="text-gray-700 py-5">
              <p>{detailData?.name}</p>
              <p>Cooking Time: {detailData?.cookTimeMinutes} mins</p>
              <p>Dish Type : {detailData?.cuisine}</p>
              <p>Time To Eat : {detailData?.mealType}</p>
              <p>Calories : {detailData?.caloriesPerServing}</p>
              </Typography>
            <Button className="mt-5" variant="contained" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>

      <div className="grid grid-cols-4 gap-4 px-4 py-4">
        {data?.recipes?.length > 0 ? (
          data?.recipes?.map((x: any) => (
            <div
              className="h-full w-full shadow-lg bg-blue-400 rounded-sm"
              key={x?.id}
            >
              <img
                className="w-full h-80 object-cover"
                alt={x?.name}
                src={x?.image}
              />
              <h4 className="text-sm mt-5 text-center">{x?.name}</h4>
              <div className="py-5 text-center m-auto bottom-0 block">
                <Button
                  className=""
                  variant="contained"
                  color="success"
                  onClick={() => handleDetails(x)}
                >
                  Detail
                </Button>
              </div>
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default RecipesPage;

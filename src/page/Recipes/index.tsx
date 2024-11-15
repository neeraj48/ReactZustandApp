import { useEffect, useState } from "react";
import useCounter, { useActions } from "../../store/useConter";
import { Button, Modal, Typography } from "@mui/material";
import DetailModal from "../../component/DetailModal";

const RecipesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, detailData } = useCounter((state: any) => state);
  const { fetchApiData, fetchApiDatabyId } = useActions();
  console.log(detailData);

  const handleDetails = (item: any) => {
    fetchApiDatabyId(`https://dummyjson.com/recipes/${item?.id}`);
    setIsOpen(true)
  };
  useEffect(() => {
    fetchApiData("https://dummyjson.com/recipes");
  }, []);

  return (
    <div className="w-full bg-white">
      <h1>Recipes Lest Page</h1>
      <div>
     <DetailModal getDetail={detailData}  isOpen={isOpen}/>
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

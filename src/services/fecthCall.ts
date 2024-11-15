const useQueryFetch = async (url: string) => {
  try {
    const apiResp = await fetch(url);
    const result = await apiResp.json();
    if (result) {
      return result;
    } else {
      throw new Error("Network down!Please try again");
    }
  } catch (error) {
    console.log("Something went wrong!");
  }
};

export default useQueryFetch;

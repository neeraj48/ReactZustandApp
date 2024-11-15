import { create } from "zustand";
import useQueryFetch from "../services/fecthCall";

const useCounter = create((set) => {
  return {
    countValue: 10,
    data: [],
    detailData: [],
    loading: true,
    error: null,
    actions: {
      handleIncrementCount: () =>
        set((state: any) => ({
          countValue: state.countValue + 1,
        })),
      fetchApiData: async (url: string) => {
        const apiResp = await useQueryFetch(url);
        try {
          set({ data: apiResp, loading: false });
        } catch (error) {
          set({ data: apiResp, loading: false, error: error });
        }
      },
      fetchApiDatabyId: async (url: string) => {
        const apiResp = await useQueryFetch(url);
        try {
          set({ detailData: apiResp, loading: false });
        } catch (error) {
          set({ detailData: apiResp, loading: false, error: error });
        }
      },
    },
  };
});

export const useActions = () => useCounter((state: any) => state.actions);

export default useCounter;

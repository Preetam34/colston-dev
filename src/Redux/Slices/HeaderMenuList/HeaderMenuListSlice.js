import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_MENU_LIST } from "./type";

export const getMenuBarList = createAsyncThunk(
  GET_MENU_LIST,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/category/getcategory`);
      console.log("response",response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const menuListSlice = createSlice({
  name: "menuListSlice",
  initialState: {
    getMenuOptionsData: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuBarList.pending, (state) => {
      state.getMenuOptionsData = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getMenuBarList.fulfilled, (state, action) => {
      state.getMenuOptionsData = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getMenuBarList.rejected, (state, action) => {
      state.getMenuOptionsData = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default menuListSlice.reducer;

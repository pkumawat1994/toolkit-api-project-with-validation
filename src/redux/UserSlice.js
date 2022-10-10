import { DataArray } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "./Config_user";
//-------------------------LOGIN--------------------------------------
export const loginUser = createAsyncThunk("Auth/loginUser", async (data) => {
  console.log(data);
  const body = {
    email: data.email,
    password: data.password,
  };
  try {
    const rdata = await instance.post("/login", body);
    console.log("tk", rdata);

    return rdata;
  } catch (err) {
    return err;
  }
});

//-----------------------------------REGISTER------------------------------

export const Regiter_User = createAsyncThunk(
  "Auth/Regiter_User",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    return await instance
      .post("/register", body)
      .then((resp) => fulfillWithValue(resp))
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);
//----------------------------GET_USER_DATA BY USER-ID---------------------------------

export const getuserData = createAsyncThunk(
  "Auth/getuserData",
  async (body, { fulfillWithValue, rejectWithValue }) => {
    return await instance
      .get("/get")
      .then((resp) => fulfillWithValue(resp))
      .catch((err) => {
        // console.log(err);
        return rejectWithValue(err);
      });
  }
);
//-----------------------------DELETE USER-------------------------------------------------
export const deleteUser = createAsyncThunk("Auth/deleteUser", async (id) => {
  return await instance
    .delete(`/delete/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
});

//------------------------------POST BY USER-------------------------------------------

export const postbyUser = createAsyncThunk("Auth/postbyUser", async (data) => {
  console.log("poosssData", data);
  return await instance
    .post("/post", data)
    .then((res) => res)
    .catch((err) => err);
});

export const UserSlice = createSlice({
  name: "Auth",
  initialState: {
    status: "idle",
    loading: false,
    error: "",
    data: [],
    userData: [],
    postCrud: "",
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log("actionn", action);
      state.data = action.payload;
      state.status = "Login success";
      state.loading = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "Login failed";
    },

    [Regiter_User.pending]: (state, action) => {
      state.status = "loading";
      state.loading = true;
    },
    [Regiter_User.fulfilled]: (state, action) => {
      console.log("action", action.payload);
      state.data = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [Regiter_User.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    //==== GET  DATA API RESPONSE
    [getuserData.pending]: (state, action) => {
      state.status = "loading";
      state.loading = true;
    },
    [getuserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [getuserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    //=======DELETE RESPONSE HANDLE
    [deleteUser.pending]: (state, action) => {
      state.status = "loading";
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.postCrud = action.payload;
      // state.userData = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [deleteUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },

    //=======POST BY USER  RESPONSE HANDLE
    [postbyUser.pending]: (state, action) => {
      console.log(action);
      state.status = "loading";
      state.loading = true;
    },
    [postbyUser.fulfilled]: (state, action) => {
      console.log("action", action.payload.status);
      state.userData = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [postbyUser.rejected]: (state, action) => {
      console.log(action);
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

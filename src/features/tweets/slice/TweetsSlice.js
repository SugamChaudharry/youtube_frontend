import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiClient } from "../../../app/api/axiosInstance";

export  const getTweets = createAsyncThunk(
  "getTweets",
  async ({userId}) => {
    if(!userId){
      throw new Error("userId required");
    }
    const response = await apiClient(`/tweets/user/${userId}`)
    return response.data.data
  }
)

const initialState = {
  tweets: []
}

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers:{
    clearTweetState: (state)=>{
      state.tweets = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTweets.fulfilled, (state,action) => {
      state.tweets = action.payload;
    })
  }
})

export default tweetSlice.reducer;
export const {clearTweetState} = tweetSlice.actions;
export const selectTweets = (state) => state.tweet.tweets;
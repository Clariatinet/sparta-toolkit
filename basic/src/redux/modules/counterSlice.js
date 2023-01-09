import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = parseInt(state.number) + parseInt(action.payload);
    },

    minusNumber: (state, action) => {
      state.number = parseInt(state.number) - parseInt(action.payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;

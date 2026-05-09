import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  carts: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: INIT_STATE,
  reducers: {
    ADD: (state, action) => {
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts.push(temp);
      }
    },

    REMOVE: (state, action) => {
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty -= 1;
        if (state.carts[ItemIndex].qnty === 0) {
          state.carts.splice(ItemIndex, 1);
        }
      }
    },

    DELETE: (state, action) => {
      const data = state.carts.filter((el) => el.id !== action.payload);

      return {
        ...state,
        carts: data,
      };
    },
  },
});

export const { ADD, REMOVE, DELETE } = CartSlice.actions;

export default CartSlice.reducer;
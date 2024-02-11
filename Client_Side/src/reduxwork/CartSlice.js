import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  ItemCount: 0,
  CartTotalAmt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.CartItems = [];
      state.ItemCount = state.CartItems.length;
    },
    addItem: (state, action) => {
      if (
        state.CartItems.filter((itm) => itm._id === action.payload.prodData._id)
          .length > 0
      ) {
          alert("Item Already Added");
      } else {
        const newItem = {
          ...action.payload.prodData,
          qty: 1,
          selSize: action.payload.selSize,
        };
        state.CartItems = [...state.CartItems, newItem];
        state.ItemCount = state.CartItems.length;
      }
    },
    increQty: (state, { payload }) => {
      const crtItem = state.CartItems.find((item) => item._id === payload.iid);
      crtItem.qty += 1;
    },
    decreQty: (state, { payload }) => {
      const crtItem = state.CartItems.find((item) => item._id === payload.iid);
      crtItem.qty -= 1;
      if (crtItem.qty == 0) {
        state.CartItems = state.CartItems.filter(
          (item) => item._id != payload.iid
        );
        state.ItemCount = state.CartItems.length;
      }
    },

    removeItem: (state, { payload }) => {
      state.CartItems = state.CartItems.filter(
        (item) => item._id != payload.iid
      );
      state.ItemCount = state.CartItems.length;
    },
    calculateTotal: (state) => {
      let totalQty = 0;
      let totalamt = 0;
      state.CartItems.forEach((item) => {
        totalQty += item.qty;
        totalamt += item.qty * item.ProdPrice;
      });
      state.CartTotalAmt = totalamt;
    },
  },
});

export const {
  calculateTotal,
  addItem,
  clearCart,
  increQty,
  decreQty,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;

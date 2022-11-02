import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CoinBox: [],
}

export const TodoSlices = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        AddBox: (state) => {
            state.CoinBox.unshift({
                id: new Date().toISOString(),
                Coin: 0
            });

        },
        deleteBox: (state, action) => {
            const filteredArr = state.CoinBox.filter(item => item.id !== action.payload);
            state.CoinBox = filteredArr;
        },
        increment: (state, action) => {
            const mappedArr = state.CoinBox.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        Coin: item.Coin + 1,
                    }
                }
                else {
                    return item;
                }
            });
            state.CoinBox = mappedArr;
        },
        decrement: (state, action) => {
            const mappedArr = state.CoinBox.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        Coin: item.Coin - 1,
                    }
                }
                else {
                    return item;
                }
            });
            state.CoinBox = mappedArr;
        },
    }
})


export const { AddBox, increment, decrement, deleteBox  } = TodoSlices.actions;

export const selectCount = state => state.counter.CoinBox;
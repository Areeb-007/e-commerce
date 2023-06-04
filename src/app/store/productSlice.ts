import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
    id: string;
    name: string;
    price: number;
}

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        fetchProductStart(state){
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess(state,action: PayloadAction<Product[]>){
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductFailure(state,action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure
} = productSlice.actions;

export default productSlice.reducer;
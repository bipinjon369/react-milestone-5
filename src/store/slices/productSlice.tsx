import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useApi from '../../services/useApi';

// Define the shape of the state
interface ListState {
    loading: boolean;
    error: string | null;
    success: string | null;
    data?: any[]; // Adjust based on API response
    recordCount?: number
    statusCode?: number // Add this line
    entireResponse?: any
}

// Define the API response structure
interface ApiResponse {
    statusCode: number | undefined;
    error: boolean;
    data: any; // Adjust based on actual data structure
}

// Define the error payload structure
interface ErrorPayload {
    message: string;
}

// Initial state
const initialState: ListState = {
    loading: true,
    error: null,
    success: null,
};

// Create an async thunk
export const fetchList = createAsyncThunk<ApiResponse, string, { rejectValue: ErrorPayload }>(
    'products/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const { getAPI } = useApi();
            const ApiResponse = await (`${payload}`);
            return { ...ApiResponse, statusCode: ApiResponse.data.status }; // Return the status code along with the data
        } catch (error: any) {
            console.error('Error fetching list:', error);
            return rejectWithValue({ message: error.message || 'Unknown error occurred' });
        }
    }
);


// Create the slice
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetState: (state) => {
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(fetchList.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
                state.loading = false;
                if (!action.payload.error) {
                    state.data = action.payload.data.data;
                    state.recordCount = action.payload.data.total_count
                    state.success = 'true'; // Ensure success is a string
                    state.entireResponse = action.payload?.data
                } else {
                    state.success = 'false';
                    state.statusCode = action.payload.statusCode;
                    state.error = 'Error occurred while fetching list';
                }
            })
            .addCase(fetchList.rejected, (state, action: PayloadAction<ErrorPayload | undefined>) => {
                state.loading = false;
                state.data = []
                state.error = action.payload?.message || 'Unknown error occurred';
                state.success = null;
            });
    },

});
export const { resetState } = productSlice.actions;
export default productSlice.reducer;

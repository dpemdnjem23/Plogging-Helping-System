import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Record {
  // 기록물 데이터의 타입 정의
  recordID: number,
  clientID: number,
  record_time: string,
  latitude: number, // 수정된 부분
  longitude: number, // 수정된 부분
  walking: number,
  distance: number,
  stopwatch: number,
  image: string,
  trash_cnt: number
}

const initialState: Record[] = [];

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    saveRecords: (state, action: PayloadAction<Record[]>) => {
      return action.payload;
    },
  },
});

export const { saveRecords } = recordSlice.actions;

export default recordSlice.reducer;

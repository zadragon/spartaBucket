const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const DONE = "bucket/DONE";

export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (id) => {
  return { type: DELETE, id };
};

export const doneBucket = (id) => {
  return { type: DONE, id };
};

const initialState = {
  is_Loaded: false,
  //list: ["영화관 가기 redux", "매일 책읽기 redux", "수영 배우기 redux"],
  list: [
    // { text: "영화관 가기", completed: false },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return state;

    case CREATE:
      const add_bucket_list = [
        ...state.list,
        { ...action.bucket, completed: false },
      ];
      return { list: add_bucket_list };

    case DELETE:
      const del_bucket_list = state.list.filter(
        (item, idx) => idx != action.id
      );
      return { list: del_bucket_list };
    case DONE:
      const done_bucket_list = state.list.map((item, idx) => {
        if (idx == action.id) {
          return { ...item, completed: true };
        }
        return item;
      });
      console.log(state);
      return { list: done_bucket_list };
    default:
      return state;
  }
}

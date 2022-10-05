const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

export const loadBucket = (bucket) => {
	return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
	return { type: CREATE, bucket };
};

export const deleteBucket = (id) => {
	return { type: DELETE, id };
};

const initialState = {
	list: ["영화관가기224442", "매일 책읽기334443", "수영 배우sdf기3344"],
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case LOAD:
			return state;

		case CREATE:
			const new_Bucket_list = [...state.list, action.bucket];
			return { list: new_Bucket_list };

		case DELETE:
			const del_bucket_list = state.list.filter((item, idx) => idx != action.id);
			return { list: del_bucket_list };

		default:
			return state;
	}
}

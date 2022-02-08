export const initialState = null;

export function reducer(state, action) {
    if (action.type === "USER") { return action.payload; }

    return state;
}
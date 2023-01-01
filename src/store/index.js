import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    defaultCategory: 'popular',
    defaultSearch: ''
});

export { useGlobalState, setGlobalState };
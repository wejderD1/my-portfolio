import {data, projects } from "../db";

const initialState = {
    data, 
    lang: "eng",
    projects
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "LANG_TROGGLE":
            return {
                ...state,
                lang: action.payload
            }  
        default:
            return state;
    }

}

export default reducer;
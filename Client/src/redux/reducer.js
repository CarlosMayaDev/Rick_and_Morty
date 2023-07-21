import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.myFavorites, action.payload],
        //         allCharacters: [...state.myFavorites, action.payload]
        //     };

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            };

        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter(
        //             (char) => char.id !== action.payload
        //         )
        //     };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                ),
            };

        case FILTER:
            if(action.payload === "allCharacters") {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                };
            } else {
                const allCharsFiltered = state.allCharacters.filter(
                    (char) => char.gender === action.payload
                );
                return {
                    ...state,
                    myFavorites: allCharsFiltered
                };
            }

        case ORDER:
            const allCharsOrdered = state.allCharacters.sort((a, b) => {
                if (action.payload === "A") return a.id - b.id;
                else if (action.payload === "D") return b.id - a.id;
                //else return 0;
            });
            return {
                ...state,
                myFavorites: allCharsOrdered
            };

        default:
            return state;
    }
};

export default rootReducer;

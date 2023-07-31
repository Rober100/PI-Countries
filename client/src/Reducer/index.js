import { ADD_ACTIVITIES, CLEAN_DETAIL, CLEAN_FILTER_BY_ACTIVITIES, DELETE_ACTIVITIES, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, FILTER_ORDER, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_DETAIL, SEARCH_COUNTRIES } from "../Redux/actionsType";

let initialState = {
    allCountries: [], // Estado local que contiene todos los países
    allCountriesFilter: [], // estado local donde se van actualizando los filtros
    countryDetail: [],
    allActivities: [],
    allActivitiesFilter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                allCountriesFilter: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: [],
                allActivities: action.payload
            }

        case ADD_ACTIVITIES:
            return {
                ...state,
                allCountriesFilter: [],
                allActivities: action.payload,
                allActivitiesFilter: action.payload
            }
        case GET_COUNTRIES_DETAIL: {
            return {
                ...state,
                countryDetail: action.payload,
            }
        };

        case CLEAN_DETAIL: {
            return {
                ...state,
                countryDetail: []
            }
        }

        case FILTER_ORDER:
            const allCountries1 = state.allCountriesFilter

            let allCountriesFilterByOrder

            if (action.payload === "A") {
                allCountriesFilterByOrder = allCountries1.sort((a, b) => a.name.localeCompare(b.name))
            }

            if (action.payload === "D") {
                allCountriesFilterByOrder = allCountries1.sort((a, b) => b.name.localeCompare(a.name))
            }

            if (action.payload === "AP") {
                allCountriesFilterByOrder = allCountries1.sort((a, b) => a.population.localeCompare(b.population))
            }

            if (action.payload === "DP") {
                allCountriesFilterByOrder = allCountries1.sort((a, b) => b.population.localeCompare(a.population))
            }

            return {
                ...state,
                allCountriesFilter: [...allCountriesFilterByOrder]
            }

        case FILTER_BY_CONTINENT:
            const allCountries2 = [...state.allCountries]
            const continentFiltered = action.payload === "All" ? allCountries2 : allCountries2.filter((element) => element.continent === action.payload)
            return {
                ...state,
                allCountriesFilter: continentFiltered
            }
        case FILTER_BY_ACTIVITIES:
            const allActivities = [...state.allActivities]


            const allActivitiesFiltered = action.payload === 'All' ? allActivities : allActivities.filter(coun => coun.name === action.payload)

            return {
                ...state,
                allCountriesFilter: [],
                allActivitiesFilter: allActivitiesFiltered
            }
        case CLEAN_FILTER_BY_ACTIVITIES : 
        return {
            ...state,
            allActivitiesFilter: []
        }

        case SEARCH_COUNTRIES:
            return {
                ...state,
                allCountriesFilter: action.payload,
                allActivitiesFilter: [],
            }
            case DELETE_ACTIVITIES:
                const allActivities1 = state.allActivities.filter(e => e.id !== action.payload)
    
                return{
                    ...state,
                    allActivitiesFilter: [...allActivities1],
                    allActivities: [...allActivities1]
                }

        default:
            return { ...state };
    }
}

export default reducer;
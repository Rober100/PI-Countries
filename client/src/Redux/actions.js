import axios from "axios";
import { ADD_ACTIVITIES, CLEAN_DETAIL, CLEAN_FILTER_BY_ACTIVITIES, DELETE_ACTIVITIES, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, FILTER_ORDER, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_DETAIL, SEARCH_COUNTRIES } from "./actionsType";
 

export const addActivity = (activities) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:3001/activities", activities)
            return dispatch({
                type: ADD_ACTIVITIES,
                payload: data
            })
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    }
};

export const getCountries = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get("http://localhost:3001/countries");
            if (data.length)
                return dispatch({ type: GET_COUNTRIES, payload: data });
        };
    } catch (error) {
        alert("Error: " + error.response.data.error);
    }
};

// export const getCountries = () => {
//     return (dispatch) => {
//         axios("http://localhost:3001/countries")
//         .then(response => response.data)
//         .then(data => dispatch({type: GET_COUNTRIES, payload: data}))
//         .catch(error => error.response.data.error)
//     }
// // }
// export const getCountries = () => {
//     return (dispatch) => {
//       return axios.get("http://localhost:3001/countries")
//         .then((response) => { if (response.data.length) {
//             dispatch({ type: GET_COUNTRIES, payload: response.data });
//           }
//         })
//         .catch((error) => {
//           alert("Error: " + error.response.data.error);
//         });
//     };
//   };



export const getActivities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/activities")
            return dispatch({
                type: GET_ACTIVITIES,
                payload: data
            })
        } catch (error) {
            alert("Error: " + error.response.data.error)
        }
    }
};

export const deleteActivities = (id) => {

    return async (dispatch) =>{
      try {
        const { data } = await axios.delete(`http://localhost:3001/activities/${id}`);
  
        console.log(data);
  
      
        if(data === 1){
          return dispatch({
            type: DELETE_ACTIVITIES,
            payload: id
          })
        }
      } catch (error) {
        // alert("Error: " + error.response);
      }
    }
  }

export const getCountriesDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
            if (data.length) {
                console.log(data);
                return dispatch({
                    type: GET_COUNTRIES_DETAIL,
                    payload: data
                })
            }
        } catch (error) {
            alert("Error: " + error.response.data.error)

        }
    }
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
} 




export const search = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: data
            })
        } catch (error) {
            alert("Error: " + error.response.data.error)
        }
    }
}

export const filterOrder = (payload) => {
    return {
        type: FILTER_ORDER,
        payload
    }
};

export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
};

export const filterByActivities = (payload) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}

export const cleanFilterByActivities = () => {
    return {
        type: CLEAN_FILTER_BY_ACTIVITIES,
    }
}
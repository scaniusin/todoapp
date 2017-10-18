const initialState = {
  filter: 'all'
};

export default function reducer(state = initialState, action) {

  switch (action.type){
    case "CHANGE_FILTER":{
      return {filter: action.payload}
    }
    default:
      return state;
  }
};

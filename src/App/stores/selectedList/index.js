const initialState = {
  list: 0
};

export default function reducer(state = initialState, action) {

  switch (action.type){
    case "CHANGE_SELECTED_LIST":{
      return {list: action.payload}
    }
    default:
      return state;
  }
};

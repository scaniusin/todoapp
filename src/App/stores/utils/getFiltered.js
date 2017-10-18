
export const getFiltered = (todos,filter, selectedIdList) => {

  let filtered = [];
  switch (filter){
    case "completed":{
      todos.map(todo =>{
        if(todo.completed === true && todo.listID === selectedIdList){ filtered.push(todo);}
      })

      return filtered;
    }
    case "active":{
      todos.map(todo =>{
        if(todo.completed === false && todo.listID === selectedIdList){ filtered.push(todo);}
      })

      return filtered;
    }
    default:
      todos.map(todo =>{
        if(todo.listID === selectedIdList){ filtered.push(todo);}
      })
      return filtered;
  }

}

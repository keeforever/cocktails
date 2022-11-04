

const reducer=(state,action)=>{

  switch (action.type) {
    case "SET_STATES":
      return {...state,cocktails:action.payload}
      case "SEARCH_COCKTAIL":
        return {...state,searchValue:action.payload}
    default:
      break;
  }
}

export {reducer}
const initialState = {
  categories: [
    {id: 1, name: "Туалетная бумага"},
    {id: 2, name: "Бытовая химия"},
    {id: 3, name: "Бумажные полотенца"},  
  ]
}
  

export default function categories(state=initialState, action) {
  if (action.type === "CATEGORY_SELECTED") {
    console.log('bingo!');

    return {
      ...state,     
      active: state.paper
    }
  }
  return {
    ...state,    
  }
};

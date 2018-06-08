const initialState = {
  chemistry: [
    {id: 1, name: "Туалетная бумага"},
    {id: 2, name: "Бытовая химия"},
    {id: 3, name: "Бумажные полотенца"},
  ]
}

export default function chemistry(state=initialState) {
  return {
    ...state
  }
};

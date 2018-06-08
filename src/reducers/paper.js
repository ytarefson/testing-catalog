const initialState = {
  paper: [
    {id: 1.1, name: "hayat"},
    {id: 1.2, name: "papia"},
    {id: 1.3, name: "золотая рыбка"},
  ]
}

export default function paper(state=initialState) {
  return {
    ...state
  }
};

const CardReducer = (state, action) => {
  
    switch (action.type) {
        case 'setCardList': {
            return { ...state, cardList: action.data, isLoading: false };
        }
        default:
            return state;
    }
};
export default CardReducer;

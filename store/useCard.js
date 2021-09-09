import CardReducer from './CardReducer';
import { useEffect, useReducer } from 'react';

import DS from "../Datasource";

function useCard() {

    const [{ isLoading, cardList }, dispatch] = useReducer(CardReducer, {
        isLoading: true,
        cardList: [],
    });

    useEffect(() => {
        const fetchData = async function () {
            dispatch({ type: 'setCardList', data: DS.GET_CARDS });
        };
        fetchData();
        return () => {
            console.log('Cleaning up');
        };
    }, []);
    return { isLoading, cardList };
}
export default useCard;

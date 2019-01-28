import shortid from 'shortid';
import { loadCities } from '../../api/company';

const initialState = {
    cities: [],
};

export default {
    state: initialState,
    reducers: {
        loadCitiesSuccess(state, cities) {
            state.cities = cities.map(({ city }) => ({
                id: shortid.generate(),
                city,
            }));
        },        
        reset(state) {
            Object.keys(state).forEach((name) => {
                state[name] = initialState[name];
            });
        },
    },
    effects: () => ({
        async search(data) {
            console.log(data);
        },
        async loadCities(query) {
            const cities = await loadCities(query);
            this.loadCitiesSuccess(cities);
        },
    })
};

export const getCities = state => state.searchForm.cities;

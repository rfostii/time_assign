import { loadCategories } from '../../../api/company';

const initialState = {
    categories: [],
};

export default {
    state: initialState,
    reducers: {
        onSuccess(state, categories) {
            state.categories = categories;
        },
    },
    effects: () => ({
        async getCategories() {
            const categories = await loadCategories();
            this.onSuccess(categories);
        },
    })
};

export const getCategories = state => state.companyCategories.categories;
export const getAllSubCategories = (state) => {
    const { categories } = state.companyCategories;

    return categories.reduce((acc, category) => {
        if (category.children) {
            return [...acc, ...category.children];
        }
        return [...acc, category];
    }, []);
};

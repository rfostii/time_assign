import { objectToQuery } from '../../services/query';

export const composeSearchLinkFromCompany = company => {
    const query = objectToQuery({
        company: company.slug,
        category: [company.category.id],
    });
    return `/search_results?${query}`;
};

export const composeSearchLinkFromCategory = category => {
    const query = objectToQuery({
        category: [category.id],
    });
    return `/search_results?${query}`;
};

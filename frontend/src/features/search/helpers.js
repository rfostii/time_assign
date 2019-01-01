import queryString from 'query-string';

export const composeSearchLink = company => {
    const query = queryString.stringify({
        company: company.slug,
        category: company.category.id,
    });
    return `/search_results?${query}`;
}

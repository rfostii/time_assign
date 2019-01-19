export const formatFromValuesToUrl = (filters) => {
    const { price, ...rest } = filters;
    const range = { priceMin: price.min || undefined, priceMax: price.max || undefined };
    return {
        ...rest,
        ...range
    };
}

export const formatFromUrlToValues = (params) => {
    const { priceMax, priceMin, ...rest } = params;
    const price = priceMax ? { min: +(priceMin || 0), max: +priceMax, } : null;

    return {
        price,
        ...rest,
    };
}

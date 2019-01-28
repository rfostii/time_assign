export const formatFromValuesToUrl = (filters) => {
    const { price, ...rest } = filters;
    const range = { price_min: price.min || undefined, price_max: price.max || undefined };
    return {
        ...rest,
        ...range
    };
}

export const formatFromUrlToValues = (params) => {
    const { price_max, price_min, ...rest } = params;
    const price = price_max ? { min: +(price_min || 0), max: +price_max, } : null;

    return {
        price,
        ...rest,
    };
}

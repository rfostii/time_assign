import shortid from 'shortid';

export const FILTER_TYPES = {
    MULTI: 'multi',
    RANGE: 'range',
};

export const FILTERS = {
    price: {
        id: shortid.generate(),
        title: 'Ціновий діапазон (грн)',
        minValue: 0,
        maxValue: 500,
        step: 1,
        type: FILTER_TYPES.RANGE,
    },
    category: {
        id: shortid.generate(),
        type: FILTER_TYPES.MULTI,
        title: 'Категорія',        
        options: [
            { name: 'Стоматологія', value: '4' },
            { name: 'Перукарня', value: '2' },
            { name: 'Салон краси', value: '1' },
        ]
    },
    procedure: {
        id: shortid.generate(),
        type: FILTER_TYPES.MULTI,
        title: 'Послуги',
        options: [
            { name: 'Стрижка чоловіча', value: '1' },
        ]
    },
};

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
            { name: 'Медицина', value: '1' },
            { name: 'Краса', value: '2' },
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

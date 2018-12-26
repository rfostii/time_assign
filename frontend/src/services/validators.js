export const required = value => {
    return value ? null : 'Поле є обов\'язковим';
};
  
export const email = value => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 
      null :
      'Неправильний email';
};

export const minLength = length => value => {
    return value.length < length ?
      `Пароль має містити хоча б ${length} символів` :
      null;
};

export const samePassword = (password1, password2) => (
    password1 !== password2 ? 'Паролі повинні співпадати' : null
);

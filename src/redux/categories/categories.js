const CHECK = 'bookstore/categories/CHECK';

export const checkStatusBook = () => ({ type: CHECK });

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;

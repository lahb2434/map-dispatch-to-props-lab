export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      return { restaurants: [...state.restaurants, action.restaurant] }

    default:
      return state;
  }
};

import {
  productAdd,
  productEdit,
  productRemove,
  productGetById,
  productGetAll,
} from "../actions/actionType";

const initialState = {
  item: [
    { id: 1, productName: "product A", price: 200 },
    { id: 2, productName: "product B", price: 400 },
  ],
  isLoading: true,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, item: state.item };

    case productAdd:
      return { ...state, item: state.item.concat([action.payload]) };

    case productGetById:
      return {
        ...state,
        item: state.item.find((query) => query.id == action.payload),
      };

    case productRemove:
      return {
        ...state,
        item: state.item.filter((query) => query.id != action.payload),
      };
    default:
      return state;
  }
}

export default productReducer;

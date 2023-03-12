import {
  productAdd,
  productEdit,
  productGetAll,
  productRemove,
  productGetById,
} from "./actionType";

export const getAll = () => ({
  type: productGetAll,
});

export const getById = (id) => ({
  type: productGetById,
  payload: id,
});

export const add = (item) => ({
  type: productAdd,
  payload: item,
});

export const remove = (id) => ({
  type: productRemove,
  payload: id,
});

export const edit = (item) => ({
  type: productEdit,
  payload: item,
});

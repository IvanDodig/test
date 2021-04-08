import axios from "axios";

const API_URL = "http://cbb.northeurope.cloudapp.azure.com:85";
export const categoryServices = {
   getAllCategories,
   getCategories,
   createCategory,
   updateCategory,
};

async function getAllCategories() {
   return axios
      .get(`${API_URL}/categories?pageIndex=0&pageSize=1313`)
      .then((res) => {
         console.log(res);
         return res;
      })
      .catch((err) => err);
}

async function getCategories(index, size) {
   return axios
      .get(`${API_URL}/categories?pageIndex=${index}&pageSize=${size}`)
      .then((res) => res)
      .catch((err) => err.response);
}

async function createCategory(category) {
   return axios
      .post(`${API_URL}/categories`, category)
      .then((res) => res)
      .catch((err) => err.response);
}

async function updateCategory(category) {
   return axios
      .put(`${API_URL}/categories/${category.categoryId}`, category)
      .then((res) => res)
      .catch((err) => err.response);
}

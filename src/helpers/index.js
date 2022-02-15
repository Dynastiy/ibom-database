import axios from 'axios';

const url = 'https://ibomdemo.africanapp.store/api/v1/';

export default {
    async login(credentials) {
        const response = await axios
            .post(url + 'auth/signin/', credentials);
        return response.data;
    },
    async getIndex() {
        const response = await axios.get(url + 'admin/data');
        return response.data;
    },
    async createProduct(payload) {
        const response = await axios.post(url + 'create-product', payload);
        return response.data;
    },
    async getDepartments() {
        const response = await axios
            .get(url + 'admin/department/list');
        return response;
    },
    async getCategories() {
        const response = await axios
            .get(url + 'all-categories/');
        return response.data;
    },
    async getProductDetails(id) {
        const response = await axios.get(`${url}find-product/${id}`);
        return response.data
    },
};
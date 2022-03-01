import axios from 'axios';

const url = 'https://ibomdemo.africanapp.store/api/v1/';

export default {
    async login(credentials) {
        const response = await axios
            .post(url + 'auth/login/', credentials);
        return response.data.data;
    },

    async getDepartments() {
        const response = await axios
            .get(url + 'admin/departments');
        return response.data.data;
    },
    async getDepartment(id) {
        const response = await axios
            .get(`${url}admin/departments/${id}`);
        return response.data.data;
    },
    async createDepartment(payload) {
        const response = await axios
            .post(url + 'admin/departments', payload);
        return response.data.data
    },
    async getStaffs() {
        const response = await axios
            .get(url + 'admin/users');
        return response.data.data;
    },
    async onboardStaff(payload) {
        const response = await axios
            .post(url + "admin/users", payload);
        return response.data.data;
    },
    async getStaff(id) {
        const response = await axios
            .get(`${url}admin/users/${id}`);
        return response.data.data;
    },
    async getProductDetails(id) {
        const response = await axios.get(`${url}find-product/${id}`);
        return response.data
    },
    async getPermissions() {
        const response = await axios.get(url + 'admin/permissions');
        return response.data.data
    },
    async createRole(payload) {
        const response = await axios
            .post(url + "admin/roles", payload);
        return response.data.data;
    },
    async getRoles() {
        const response = await axios
            .get(url + 'admin/roles');
        return response.data.data;
    },
    async getUser() {
        const response = await axios.get(url + 'auth/user');
        return response.data.data
    },
    async getBanks() {
        const response = await axios.get('https://api.paystack.co/bank');
        return response.data.data
    },
    async updateProfile(payload) {
        const response = await axios.post(url + 'auth/profile', payload)
        return response.data.data
    },
    async assignTask(payload) {
        const response = await axios.post(url + 'tasks', payload)
        return response.data.data
    },
    async getTasks() {
        const response = await axios.get(url + 'tasks')
        return response.data.data
    }
};
import axios from 'axios';

const url = 'https://testapi.ndloo.com/api';

export default {
    async login(credentials) {
        const response = await axios
            .post(url + '/login', credentials);
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
    },
<<<<<<< HEAD
    async getTasksById(id) {
        const response = await axios.get(`${url}tasks/${id}`)
        return response.data.data
    },
    async deactivateUser(payload) {
        const response = await axios.post(`${url}admin/users/deactivate`, payload)
        return response.data.data
    },
    async activateUser(payload) {
        const response = await axios.post(`${url}admin/users/activate`, payload)
        return response.data.data
    },
    async banUser(payload) {
        const response = await axios.post(`${url}admin/user/ban`, payload)
        return response.data.data
    },
    async unbanUser(id) {
        const response = await axios.post(`${url}admin/user/${id}/unban`)
        return response.data.data
    },
    async approve(id) {
        const response = await axios.post(`${url}tasks/${id}/approve`)
        return response.data.data
    },
    async decline(id) {
        const response = await axios.post(`${url}tasks/${id}/reject`)
        return response.data.data
    },
    async forward(id) {
        const response = await axios.post(`${url}tasks/${id}/forward`)
        return response.data.data
    },
=======

    // async deleteDepartment(id) {
    //     const response = await axios.post(`${url}admin/departments/${id}`)
    //     return response.data.data
    // },
    // async updateDepartment(updateDeparmentInfo) {
    //     const response = await axios.post(`${url}admin/departments/${id}`, updateDeparmentInfo)
    //     return response.data.data
    // }
>>>>>>> afd46f6b5cd44fa24aa4e8424d3ea11b946ddcfa
};

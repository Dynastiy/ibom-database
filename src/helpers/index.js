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
            .get(url + 'admin/department/list');
        return response.data.data;
    },
    async getDepartment(id) {
        const response = await axios
            .get(`${url}admin/department/view/${id}`);
        return response.data.data;
    },
    async getStaffs() {
        const response = await axios
            .get(url + 'admin/users/list');
        return response.data.data;
    },
    async getRoles(){
        const response = await axios
        .get(url + 'admin/roles');
        return response.data.data;
    },
    async onboardStaff(payload){
        const response = await axios
        .post(url + "admin/user/create", payload);
        return response.data.data;
    },
    async getProductDetails(id) {
        const response = await axios.get(`${url}find-product/${id}`);
        return response.data
    },
};
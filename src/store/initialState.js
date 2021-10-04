const initialState = {
    token: localStorage.getItem('token') || null,
    server: localStorage.getItem('server') || 'Europe',
    subfields: false,
    errorsAuth: null,
    userinfo: null,
    promocodes: [],
    userPromocodes: []
};

export default initialState;
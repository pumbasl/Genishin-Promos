const initialState = {
    token: localStorage.getItem('token') || null,
    server: localStorage.getItem('server') || 'Europe',
    subfields: [],
    errorsAuth: null,
    userinfo: null,
    promocodes: [],
    userPromocodes: [],
    news: false
};

export default initialState;
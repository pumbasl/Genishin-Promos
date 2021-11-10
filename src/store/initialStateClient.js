const initialState = {
    Loading: true,
    token: localStorage.getItem('token') || null,
    server: localStorage.getItem('server') || 'Europe',
    subfields: [],
    errorsAuth: null,
    userinfo: null,
    promocodes: [],
    userPromocodes: [],
    threads: [],
    news: false
};

export default initialState;
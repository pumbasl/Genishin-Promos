const initialState = {
    loading: false,
    server: localStorage.getItem('server') || 'Europe',
    subfields: false,
    promocodes: [],
    userPromocodes: []
};

export default initialState;
module.exports = {
    GetPromos: `
    query Promo{
        promos{
            _id
            code
            server
            expired
        }
    }`,
    AddPromo: `
    mutation AddPromo($code: String!, $server: String!, $expired: Float!){
        addPromo(code: $code, server: $server, expired: $expired){
            code
            server
            expired
        }
    }
    `
};
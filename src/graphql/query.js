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

    UserByUuid: `
    query UserByUuid($uuid: ID!){
        usersByUuid(uuid: $uuid){
            uuid
            promos{
                _id
                code
                server
                expired
            }
            ua
        }
    }`,

    AddPromo: `
    mutation AddPromo($code: String!, $server: String!, $expired: Float!){
        addPromo(code: $code, server: $server, expired: $expired){
            code
            server
            expired
        }
    }`,

    AddUser: `
    mutation NewUser($promos: [String!], $server: String!, $ua: String!){
        addUser(promos: $promos, server: $server, ua: $ua){
            uuid
            server
            ua
        }
    }`,

    EditUser: `
    mutation EditUser($uuid: ID!, $promos: [String!]){
        editUser(uuid: $uuid, promos: $promos)
    }`,

    getSubfields: `
    query SubFields{
        subfields{
            _id
            name
            link
        }
    }
    `,

};
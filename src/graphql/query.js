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

    GetPromoByServer: `
    query GetPromoByServer($server: String!){
        promosByServer(server: $server){
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

    EditUserPromos: `
    mutation EditUserPromos($uuid: ID!, $promos: [String!]){
        editUserPromos(uuid: $uuid, promos: $promos)
    }`,

    EditUserServer: `
    mutation EditUserServer($uuid: ID!, $server: String!){
        editUserServer(uuid: $uuid, server: $server)
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
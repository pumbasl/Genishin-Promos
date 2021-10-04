const registration = `
mutation Registration($login: String!, $password: String!, $server: String!, $ua: String!){
    registration(login: $login, password: $password, server: $server, ua: $ua){
        accessToken
    }
}
`;

export default registration;
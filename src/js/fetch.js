export default async function RestRequest(data){
    const link = process.env.REACT_APP_GAPHQL;

    const response = await fetch(link, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
let error = false;

async function newAccessToken(data){
    let resultData;

    await Fetch({}, 'refresh_token')
    .then(res => res.json())
    .then(
        (result) => {
            if(result.ok === true){
                localStorage.setItem('token', result.accessToken);
                resultFetch(data);
            }
        },
        (error) => {
            console.log(error);
            resultData = { error: true, message: error.message };
        }
    );
    
    return resultData;
}


export default async function resultFetch(data){
    let resultData;

    await Fetch(data, 'api')
    .then(res => res.json())
    .then(
        (result) => {
            if(result?.errors?.length > 0){
                for(const value of result.errors){
                    if(value.message === 'not authenticated'){
                        if(!error){
                            error = true;
                            resultData = value.message;
                            newAccessToken(data);
                        }
                    }
                }
            } else {
                error = false;
                resultData = result.data;
            }
        },

        (error) => {
            console.log(error)
            resultData = { error: true, message: error.message };
        }
    );

    return resultData;
}

async function Fetch(data, api){
    return await fetch(`${process.env.REACT_APP_ENDPOINT}${api}`, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    });
}
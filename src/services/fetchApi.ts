export const apiKitsUrl = "https://taxitracker-api-data.freemyip.com"
export const apiUsersUrl = "https://taxitracker-api-users.freemyip.com"
export const apiGraphUrl = "https://taxitracker-api-data.freemyip.com"

export const get = async (baseUrl:string, endpoint: string): Promise<any> => {
    return fetch(`${baseUrl}/${endpoint}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}

export const post = async (baseUrl:string, endpoint: string, data: any) => {
    console.log(data)
    return fetch(`${baseUrl}/${endpoint}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}

export const postWithoutJSON = async (baseUrl:string, endpoint: string, data: any) => {
    console.log(data)
    return fetch(`${baseUrl}/${endpoint}`,{
        method: "POST",
        body: data,
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}

export const put = async (baseUrl: string, endpoint: string, data: any) => {
    return fetch(`${baseUrl}/${endpoint}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}

export const patchWithoutJSON = async(baseUrl: string, endpoint: string, data: any) => {
    console.log(data)
    return fetch(`${baseUrl}/${endpoint}`,{
        method: "PATCH",
        body: data,
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}

export const deleteMethod = async(baseUrl: string, endpoint:string) => {
    return fetch(`${baseUrl}/${endpoint}`,{
        method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}
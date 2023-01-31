 const BASE_API_URL = 'https://api.noroff.dev/api/v1';

 const getAllCats = async () => {
    const result = await fetch(`${BASE_API_URL}/jokes`);
    const jsonData = await result.json();
    const slicedData = jsonData.slice(0,10)
    return slicedData
}

 const getCat = async (id) => {
    const result = await fetch(`${BASE_API_URL}/jokes/${id}`);
    const jsonData = await result.json();
    return jsonData;
}



export {
    BASE_API_URL,
    getAllCats,
    getCat
}



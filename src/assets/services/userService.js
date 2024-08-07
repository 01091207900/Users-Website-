export const fetchUsers = async(page)=>{
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    return data.data;
}

export const fetchUser = async(id)=>{
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    return data.data;
}


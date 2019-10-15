import axios from "axios";

export default function withAuth(){
    const token = localStorage.getItem('token')

    const instance = axios.create({
        "Content-Type": "application/json",
        "Authorization": token
    })

    return instance;
}
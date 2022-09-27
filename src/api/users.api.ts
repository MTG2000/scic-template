import { nanoid } from "@reduxjs/toolkit";


let users = [
    {
        id: nanoid(),
        name: "Mohammed",
        email: "mtg@gmail.com",
        age: 22,
    },
    {
        id: nanoid(),
        name: "Ahmad",
        email: "aa@gmail.com",
        age: 34,
    },
    {
        id: nanoid(),
        name: "Lara",
        email: "lara@gmail.com",
        age: 32,
    },
    {
        id: nanoid(),
        name: "Sami",
        email: "sa@gmail.com",
        age: 43,
    },
]

export type User = typeof users[number]

export async function getAllUsers() {
    return users;
}

export async function getUserById(id: string) {
    return users.find(u => u.id === id);
}

type CreateUser = Omit<User, 'id'>

export async function createUser(data: CreateUser) {
    users.push({ ...data, id: nanoid() })
    return users[users.length - 1];
}

export async function updateUser(data: User) {
    users = users.map(u => u.id === data.id ? data : u);
}

export async function deleteUser(id: string) {
    users = users.filter(u => u.id !== id);
}
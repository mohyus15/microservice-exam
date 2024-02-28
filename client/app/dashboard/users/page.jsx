"use client"
import React, { useState, useEffect } from 'react';
import styles from '../products/productsList.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/v1/all');
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data);
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>id</td>
                    <td>firstname</td>
                    <td>lastName</td>
                    <td>email</td>
                    <td>role</td>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;

import { useState } from 'react'
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const logInfo = () => {
        console.log(`%ctên đăng nhập là: ${username}`, 'color: #FF3333');
        console.log(`%cmật khẩu là: ${password}`, 'color: #e8e800');
        console.log(`%cisAdmin: ${isAdmin}`, 'color: #617ded');
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', border: '3px solid black', maxWidth: '500px', padding: '10px' }}>
                Enter your username: <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                Enter your password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

                <div style={{ display: "flex" }}>
                    <input id='isAdmin' value={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} type="checkbox" />
                    <label htmlFor="isAdmin">Is Admin?</label>
                </div>

                <input onClick={logInfo} type="button" value="Đăng nhập" />
            </div>
        </>
    )
}
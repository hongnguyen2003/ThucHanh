import style from './InfomationForm.module.css';
import classNames from 'classnames/bind';
import InputBar from 'components/mini.components/InputBar';
import { useState, useEffect } from 'react';
const cx = classNames.bind(style);

export default function InfomationForm({ data, className, ...props }) {

    const [authData, setAuthData] = useState({});

    useEffect(() => {
        async function fetchingData() {
            try {
                const data = await fetch('http://localhost:8080/api/getUser', {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'include',
                })

                const decode = await data.json();
                setAuthData(decode);


            } catch (error) {
                console.log(error);
            }


        }

        fetchingData();

    }, []);
    return (
        <div className={cx("container")} >
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Infomation</h1>
                <div className={cx("line")}>
                    <label className={cx("label")}>Username:</label>
                    <InputBar className={cx("input")}
                        value={authData.username}
                        disabled
                    />
                </div>
                <div className={cx("line")}>
                    <label className={cx("label")}>Passsword:</label>
                    <InputBar className={cx("input")}
                        value={authData.password}
                        disabled
                    />
                </div>
                <div className={cx("line")}>
                    <label className={cx("label")}>FullName:</label>
                    <InputBar className={cx("input")}
                        value={authData.fullname}
                        disabled
                    />
                </div>
                <div className={cx("line")}>
                    <label className={cx("label")}>Email:</label>
                    <InputBar className={cx("input")}
                        value={authData.email}
                        disabled
                    />
                </div>
                <div className={cx("line")}>
                    <label className={cx("label")}>Address:</label>
                    <InputBar className={cx("input")}
                        value={authData.address}
                        disabled
                    />
                </div>
                <div className={cx("line")}>
                    <label className={cx("label")}>Role:</label>
                    <InputBar className={cx("input")}
                        value={authData.role}
                        disabled
                    />
                </div>
                <div className={cx("line")}>
                    <label className={cx("label")}>Sex:</label>
                    <InputBar className={cx("input")}
                        value={authData.sex}
                        disabled
                    />
                </div>
            </form>
        </div>

    );
};


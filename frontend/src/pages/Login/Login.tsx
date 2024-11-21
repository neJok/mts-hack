import { useState } from "react"
import styles from "./login.module.css"
import AxiosInstance from "../../api/instance.ts";
import {toast} from "react-toastify";

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = () => {
    AxiosInstance.post('/login', {
      username: username,
      password: password,
    })
      .then(response => {
        const accessToken = response.data.token;
        localStorage.setItem("token", accessToken);
        window.location.href = "/"
      })
      .catch(error => {
        toast(error.response.data.error, {
          position: "top-right",
          autoClose: 5000
        })
      })
  }

  return (
    <div className={styles.bg}>
      <div className={styles.mainBox}>
        <div className={styles.titleBox}>
          <img src="/img/kion-logo.svg" className={styles.logo} alt=''/>
          <h1 className={styles.title}>Войдите или зарегистрируйтесь</h1>
        </div>
        <div className={styles.inputBox}>
          <input type="text" className={styles.input} placeholder={"Введите свой ник..."} onChange={(e) => setUsername(e.target.value)} value={username}/>
          <button className={styles.button} onClick={() => setUsername("")}>
            <svg className={styles.svg}>
              <path d="M17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L12 10.5858L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L10.5858 12L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L12 13.4142L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.4142 12L17.7071 7.70711Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
        <div className={styles.inputBox}>
          <input type="password" className={styles.input} placeholder={"Введите свой пароль..."} onChange={(e) => setPassword(e.target.value)} value={password}/>
          <button className={styles.button} onClick={() => setPassword("")}>
            <svg className={styles.svg}>
              <path d="M17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L12 10.5858L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L10.5858 12L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L12 13.4142L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.4142 12L17.7071 7.70711Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
        <button className={styles.nextButton} onClick={onLogin}>Далее</button>
      </div>
    </div>
  )
}


import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import {useRecoilState} from "recoil";
import {UserState} from "../../api/user.ts";
import { motion } from "motion/react"
import { toast } from "react-toastify"


export const Profile = () => {
	const navigate = useNavigate()

	const [user, setUser] = useRecoilState(UserState);

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		return navigate("/");
	}

	return (
		<div className={styles.main}>
			<Header currentUrl="profile" />
			<div className={styles.content}>
				<div className={styles.navBar}>
					<p className={styles.username}>{user?.username}</p>
					<div className={styles.block}>
						<h1>Моё видео</h1>
						<div className={styles.link}>
							<svg xmlns="http://www.w3.org/2000/svg">
								<g _ngcontent-kion-c2678844377=""><path _ngcontent-kion-c2678844377="" d="M15 11a1 1 0 100-2h-2V7a1 1 0 10-2 0v2H9a1 1 0 100 2h2v2a1 1 0 102 0v-2h2z"></path><path _ngcontent-kion-c2678844377="" clip-rule="evenodd" d="M4.042 14.99C4.016 14.042 4 13.033 4 11.98c0-1.547.068-2.896.168-4.046.175-2.021.263-3.032 1.557-4.319C7.02 2.33 7.99 2.248 9.932 2.087a25.015 25.015 0 014.136 0c1.942.161 2.913.242 4.207 1.528 1.294 1.287 1.382 2.298 1.557 4.319.1 1.15.168 2.5.168 4.045 0 1.054-.016 2.063-.041 3.01-.072 2.628-.108 3.942-.801 5.076-.976 1.597-2.583 2.594-4.29 1.401-1.387-.968-2.08-1.452-2.868-1.452-.788 0-1.481.484-2.867 1.452-1.69 1.18-3.273.265-4.291-1.4-.693-1.135-.729-2.449-.8-5.076zm1.999-.055C6.015 14.005 6 13.013 6 11.98c0-1.487.065-2.779.16-3.872.094-1.077.149-1.598.278-2.018.096-.31.249-.609.698-1.055.459-.457.754-.605 1.043-.695.395-.123.88-.173 1.918-.26a23.014 23.014 0 013.806 0c1.037.087 1.524.137 1.918.26.289.09.584.238 1.043.695.45.446.602.745.698 1.055.13.42.184.94.278 2.018.095 1.093.16 2.385.16 3.873 0 1.033-.015 2.024-.04 2.955-.078 2.84-.157 3.512-.509 4.088-.354.58-.71.852-.917.936a.328.328 0 01-.172.03c-.04-.004-.155-.026-.35-.162l-.073-.052c-.63-.44-1.23-.858-1.774-1.155-.61-.332-1.317-.606-2.165-.606-.848 0-1.555.274-2.165.606-.545.296-1.145.716-1.774 1.155l-.074.052c-.2.14-.319.165-.361.17a.291.291 0 01-.157-.024c-.186-.074-.542-.332-.92-.95-.352-.576-.43-1.248-.508-4.088z" fill-rule="evenodd"></path></g></svg>
							<p>Смотреть позже</p>
						</div>
						<div className={styles.link}>
							<svg>
								<g _ngcontent-kion-c2678844377="" clip-path="url(#clip0_12213_8109)"><path _ngcontent-kion-c2678844377="" d="M.405 14.52A.965.965 0 011.193 13c.497 0 .755.239 1.02.614.303.428.56.79.787 1.097 0-1.596 0-3.2.08-4.789.195-2.616.293-3.924 1.605-5.237 1.313-1.313 2.621-1.41 5.237-1.605C10.6 3.03 11.3 3 12 3c.7 0 1.4.03 2.078.08 2.616.195 3.924.292 5.237 1.605 1.312 1.313 1.41 2.621 1.605 5.237.05.678.08 1.378.08 2.077 0 .7-.03 1.4-.08 2.078-.195 2.616-.292 3.924-1.605 5.237-.19.19-.379.353-.572.496-1.146.851-2.426.961-4.665 1.128-.355.026-.715.047-1.078.061a.955.955 0 01-.194-.012c-.268.008-.536.013-.805.013-.7 0-1.399-.03-2.077-.081-1.475-.11-2.535-.189-3.413-.472a1 1 0 11.566-1.917c.565.19 1.408.276 2.995.394.638.048 1.287.076 1.929.076.642 0 1.292-.028 1.929-.076 2.349-.174 3.067-.283 3.667-.75a3.47 3.47 0 00.303-.275c.706-.706.82-1.22 1.025-3.971.047-.637.076-1.287.076-1.929 0-.642-.029-1.291-.076-1.929-.205-2.75-.319-3.264-1.025-3.97-.706-.707-1.22-.82-3.97-1.025a26.112 26.112 0 00-1.93-.076c-.642 0-1.291.028-1.928.076-2.75.204-3.265.318-3.971 1.024-.706.707-.82 1.221-1.025 3.971C5 11.588 5 13.164 5 14.71c.225-.306.483-.668.786-1.096.265-.375.523-.615 1.02-.615.782 0 1.24.882.788 1.521l-.003.005C5.957 16.84 5.139 18 4 18 2.86 18 2.042 16.84.408 14.525l-.003-.005z"></path><path _ngcontent-kion-c2678844377="" d="M11 8v3.957a.998.998 0 00.292.751l1.999 1.999a1 1 0 001.414-1.414L13 11.588V8a1 1 0 10-2 0z"></path></g><defs _ngcontent-kion-c2678844377=""><clipPath _ngcontent-kion-c2678844377="" id="clip0_12213_8109"><path _ngcontent-kion-c2678844377="" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
							<p>История просмотров</p>
						</div>
						<div className={styles.link}>
							<svg>
								<g _ngcontent-kion-c2678844377=""><path _ngcontent-kion-c2678844377="" d="M10.783 13.93a10.65 10.65 0 002.395.005c.241-.026.403-.044.539-.064l.13-.022c.008-.037.017-.089.027-.16.02-.144.038-.314.064-.564.038-.368.062-.751.062-1.124a1 1 0 112 0c0 .456-.03.909-.073 1.33-.099.959-.149 1.438-.647 1.94-.498.5-.96.551-1.885.652a12.652 12.652 0 01-2.841-.007c-.872-.1-1.308-.15-1.8-.637-.49-.487-.546-.937-.659-1.836A11.773 11.773 0 018 12.001a1 1 0 112 0c0 .396.031.804.08 1.195.03.235.05.392.07.523l.024.13.106.017c.125.02.275.037.503.064z"></path><path _ngcontent-kion-c2678844377="" clip-rule="evenodd" d="M15.927 4.672c.044.42.073.873.073 1.329h2.74a1 1 0 011 1h.005c.03.29.058.604.087.946C19.932 9.1 20 10.452 20 12c0 1.55-.068 2.903-.168 4.056-.175 2.024-.263 3.036-1.557 4.325-1.294 1.29-2.264 1.37-4.205 1.532a24.956 24.956 0 01-4.14 0c-1.94-.161-2.911-.242-4.205-1.532-1.294-1.289-1.381-2.301-1.557-4.325A46.94 46.94 0 014 12a46.945 46.945 0 01.255-5h.003a1 1 0 011-1H8c0-.497.04-.99.095-1.442.113-.9.169-1.349.66-1.836.491-.487.927-.537 1.799-.638a12.645 12.645 0 012.841-.006c.925.1 1.387.151 1.885.653.498.5.548.98.647 1.94zm-5.144-.6a10.646 10.646 0 012.395-.005c.241.026.403.044.539.064l.13.022c.008.037.017.089.027.16.02.144.038.314.064.564.038.369.062.75.062 1.124h-4c0-.396.031-.804.08-1.195.03-.235.05-.392.07-.523l.024-.13.106-.017c.125-.02.275-.037.503-.064zM6.171 8.001l-.01.12A44.95 44.95 0 006 12c0 1.492.065 2.787.16 3.883.094 1.078.149 1.601.278 2.022.097.312.25.612.699 1.06.46.458.755.606 1.043.696.394.123.879.173 1.916.26a22.958 22.958 0 003.808 0c1.037-.087 1.523-.137 1.916-.26.288-.09.584-.238 1.043-.696.45-.448.602-.748.699-1.06.13-.42.184-.944.278-2.022.095-1.096.16-2.391.16-3.883 0-1.49-.065-2.785-.16-3.881L17.83 8H6.17z" fill-rule="evenodd"></path><path _ngcontent-kion-c2678844377="" clip-rule="evenodd" d="M12 14.001c-.436 0-.847-.028-1.217-.071a14.116 14.116 0 01-.503-.064 2.726 2.726 0 01-.106-.018 2.744 2.744 0 01-.023-.129 14.991 14.991 0 01-.07-.523A9.774 9.774 0 0110 12a1 1 0 00-2 0c0 .497.04.99.095 1.442.113.9.169 1.349.66 1.836.491.487.927.537 1.799.638a12.652 12.652 0 002.841.006c.925-.1 1.387-.152 1.885-.653s.548-.98.647-1.94c.044-.42.073-.873.073-1.329a1 1 0 00-2 0c0 .373-.024.756-.062 1.124-.026.25-.044.42-.064.564-.01.071-.02.123-.026.16a2.932 2.932 0 01-.131.022c-.136.02-.298.038-.54.064-.363.04-.76.066-1.177.066z" fill-rule="evenodd"></path></g></svg>
							<p>Мои фильмы и сериалы</p>
						</div>
						<div className={styles.link} onClick={() => navigate("/stats")}>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.special}>
								<rect x="1" y="1" width="14" height="14" rx="5" stroke="white" stroke-width="1.5"/>
								<rect x="11.25" y="6" width=".1" height="6" rx="1" fill="none" stroke="white" stroke-width="1.5"/>
								<rect x="7.5" y="4" width=".1" height="8" rx="1" fill="none" stroke="white" stroke-width="1.5"/>
								<rect x="4" y="7" width=".1" height="5" rx="1" fill="none" stroke="white" stroke-width="1.5"/>
							</svg>
							<p>Статистика</p>
						</div>
					</div>
					<button className={styles.quit} onClick={logout}>Выйти</button>
				</div>
				<PriseSpin />
			</div>
		</div>
	)
}

const PriseSpin = () => {
	const [el, setEl] = useState(0)
	const [isActive, setActive] = useState(true)
	const prises = [
		{
			url: 'https://avatars.mds.yandex.net/i?id=f04def0913853e0865fe2f02db59041f38be8050-5109844-images-thumbs&n=13'
		},
		{
			url: '/img/30.png'
		},
		{
			url: '/img/film.png'
		},
		{
			url: '/img/7.png'
		},
	]
	useEffect(() => {
		if (localStorage.getItem('prize')) {
			setActive(false)
		}
		const interval = setInterval(() => {
			setEl((el + 1) % prises.length)
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	const handleClick = () => {
		toast("Вы выиграли приз: Скидка 5% на подписку мтс премиум. Промокод: qN45gf4", {position: "top-right", autoClose: 10000})
		localStorage.setItem("prize", "true")
		setActive(false)
	}
	return (
		<div className={styles.spin}>
			<motion.div>
				<Img prises={prises} el={el} />
			</motion.div>
			<button className={styles.button} onClick={() => handleClick()} disabled={!isActive}>Получить приз</button>
		</div>
	)
}

interface Prise {
	url: string
}

interface Props {
	prises: Prise[]
	el: number
}

function Img(props: Props) {
	return (
		<div className={styles.prises}>
			<div className={styles.prises}>
				<motion.img
					key={props.el}
					src={props.prises[props.el].url}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-[355px]"
				/>
			</div>
		</div>
	)
}

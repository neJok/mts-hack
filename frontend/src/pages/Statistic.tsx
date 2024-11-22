import { Trophy, Film, Star, Clock, Bomb } from 'lucide-react';
import MovieCard from "../components/MovieCard.tsx";
import Header from "../components/Header.tsx";
import {useRecoilState} from "recoil";
import {UserState} from "../api/user.ts";
import {useEffect, useState} from "react";
import AxiosInstance from "../api/instance.ts";

const Stats = () => {
  const fakeUser = {
    name: "Иван Старабогов",
    stats: {
      watching: "48",
      completed: "156"
    },
    favoriteMovies: [
      {
        title: "Смешарики. Начало",
        poster: "https://static.kion.ru/content/mts/movies/70007475/posters/VERTICAL_cf579da0e77d41a36a7e4b542a730601.webp?x=500&y=10&ar=keep",
		rating: 8,
		type: "Бесплатно",
      },
      {
        title: "Астробой",
        poster: "https://static.kion.ru/content/mts/movies/22743174/posters/VERTICAL_193d4c8bdd4cf82d7af5d40cf82cb6ee.webp?x=500&y=10&ar=keep",
		rating: 8,
		type: "По подписке",
      },
      {
        title: "Последний Богатырь",
        poster: "https://static.kion.ru/content/mts/movies/70010362/posters/VERTICAL_8bcf474f97cb26efcdc7f9b04e2d4201.webp?x=500&y=10&ar=keep",
		rating: 8,
		type: "По подписке",
      }
    ],
    achievements: [
      { icon: Trophy, label: "Любитель кино", color: "text-yellow-500" },
      { icon: Star, label: "Лучший рецензент", color: "text-purple-500" },
      { icon: Clock, label: "Ранний пользователь", color: "text-blue-500" }
    ]
  };

	const [user] = useRecoilState(UserState)

  return (
    <div className="px-[20px] lg:px-[80px] text-white">
      <Header currentUrl="stats" />
      <div className="flex flex-col lg:flex-row">

	      <div className="h-fit flex lg:mt-4 w-full lg:w-[65vw]">
	        <div className="w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden lg:mr-4">
	          <div className="pt-20 px-8 pb-8">
	            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
	              <div>
	                <h1 className="text-3xl font-bold text-white mb-2">{user?.username}</h1>
	                <div className="flex gap-4 flex-wrap">
	                  {fakeUser.achievements.map((achievement, index) => (
	                    <div
	                      key={index}
	                      className="flex items-center gap-2 bg-gray-700 rounded-full px-4 py-1 transform transition hover:scale-105"
	                    >
	                      <achievement.icon className={`w-4 h-4 ${achievement.color}`} />
	                      <span className="text-sm text-gray-300">{achievement.label}</span>
	                    </div>
	                  ))}
	                </div>
	              </div>
	              <div className="grid grid-cols-2 gap-6 mt-6 lg:mt-0">
	                <StatCard icon={Film} label="Смотрит сейчас" value={fakeUser.stats.watching} />
	                <StatCard icon={Clock} label="Просмотрено" value={fakeUser.stats.completed} />
					<StatCard icon={Bomb} label="Ударный стрик" value={String(user?.streak_days)} />
	              </div>
	            </div>

	            <div className="space-y-6">
	              <h2 className="text-xl font-semibold text-white">Любимые фильмы</h2>
	              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	                {fakeUser.favoriteMovies.map((movie, index) => (
	                  <MovieCard type={movie.type} key={index} title={movie.title} rating={movie.rating} imageUrl={movie.poster}/>
	                ))}
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="mt-4 bg-gray-800 flex-1 rounded-2xl p-4">
					<LiderBoardCardList />
				</div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="text-center group">
      <div className="bg-gray-700 p-3 rounded-lg mb-2 transform transition group-hover:scale-110 group-hover:bg-gray-600 justify-center items-center flex">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}


function LiderBoardCardList() {
	const [topUsers, setTopUsers] = useState<[string, number][]>([])

	useEffect(() => {
		AxiosInstance.get('/topliststreak')
			.then(response => {
				setTopUsers(response.data as [string, number][])
			})
	}, [])
	return (
		<>
			<span className="mb-5">Топ пользователей по ударному режиму:</span>
			{topUsers.map((user, index: number) =>
				<div className="bg-gray-600 w-full h-12 rounded-lg mt-3 flex justify-between items-center px-4 font-['Stolzl']" key={index}>
					<div className="flex gap-2">
						<p className={index <= 2 ? "text-[#BA9D5A]" : ''}>{index + 1}</p>
						<p>{ user[0] }</p>
					</div>
					<p>{user[1]}</p>
				</div>
			)}
		</>
	)
}

export default Stats;

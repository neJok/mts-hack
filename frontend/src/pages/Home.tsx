import MovieCard from '../components/MovieCard.tsx';
import GameCard from '../components/GameCard.tsx';
import AchievementCard from '../components/AchievementCard.tsx';
import Header from "../components/Header.tsx";

const Home = () => {
  const movieData = [
    {
      title: 'Праздники',
      rating: 8,
      type: 'Бесплатно',
      imageUrl: 'https://htv-vsc.kion.ru:32130/CPS/images/universal/film/poster/202405/20240514/18/202405141130216205ln.jpeg?x=1344&y=10&ar=keep'
    },
    {
      title: 'Мастер и Маргарита',
      rating: 7,
      type: 'Подписка',
      imageUrl: 'https://static.kion.ru/content/mts/movies/70014494/posters/VERTICAL_af320c5c86bc1bb697f36155dee3ebad.webp?x=500&y=10&ar=keep'
    },
    {
      title: 'Дом дракона',
      rating: 8,
      type: 'Подписка',
      imageUrl: 'https://static.kion.ru/content/amediateka/series/31294/posters/VERTICAL_f9cd5ee077e4886b9c1d1a453ab74b16.webp?x=500&y=10&ar=keep'
    },
    {
      title: 'Игра престолов',
      rating: 9,
      type: 'Подписка',
      imageUrl: 'https://static.kion.ru/content/amediateka/series/11223/posters/VERTICAL_5af36a6306ae4b51da79d81e7a7b60b1.webp?x=500&y=10&ar=keep'
    },
    {
      title: 'Уроки китайского',
      rating: 8,
      type: 'Подписка',
      imageUrl: 'https://static.kion.ru/content/amediateka/series/35018/posters/VERTICAL_f61ad56089b5cf7f3ec3ac5394d6b7b0.webp?x=500&y=10&ar=keep'
    },
  ]

  const achievements = [
    {
      title: 'Месяц фильмов',
      description: 'Смотри фильмы или сериалы каждый день',
      progress: '8 / 30'
    },
    {
      title: 'До конца',
      description: 'Досмотри 5 сериалов до конца',
      progress: '2 / 5'
    },
    {
      title: 'Ценитель',
      description: 'Оцени 10 фильмов',
      progress: '2 / 10'
    },
    {
      title: 'Ясновидящий',
      description: 'Угадай подряд 20 фильмов по кадру',
      progress: '2 / 20'
    },
  ];

  const games = [
    {
      title: 'Угадай фильм по кадру',
      duration: '5 мин.',
      path: '/guess-movie'
    },
    {
      title: 'Получил ли фильм оскар',
      duration: '10 мин.',
      path: '/guess-movie'
    },
    {
      title: 'Угадай случайный факт об актере',
      duration: '5 мин.',
      path: '/guess-movie'
    },
    {
      title: 'Посмотри рандомный фильм',
      duration: '1 мин.',
      path: '/guess-movie'
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0b17] text-white px-[20px] lg:px-[80px]">
      <Header currentUrl="main" />

      <main className="container mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Популярно сейчас:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movieData.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl mb-6">Статистика достижения:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-6">Наши игры и квизы:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
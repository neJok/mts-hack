import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import AxiosInstance from "../api/instance.ts";
import {User} from "lucide-react";
import {useRecoilState} from "recoil";
import {UserState} from "../api/user.ts";


interface HeaderProps {
  currentUrl: string;
}

const Header: React.FC<HeaderProps> = ({ currentUrl }) => {
  const [user, setUser] = useRecoilState(UserState);

  const fetchProfile = () => {
    AxiosInstance.get('/profile')
      .then(response => {
        setUser(response.data);
      })
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(currentUrl)

	const navigate = useNavigate()
  return (
    <header className="border-b border-gray-800">
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src='/img/logo.webp' alt='' className="h-[50px] cursor-pointer" onClick={() => navigate("/")}/>
            <nav className="hidden lg:flex space-x-6 mt-1">
              <a
                onClick={() => navigate("/")}
                className={`cursor-pointer ${currentUrl === "main" ? "text-[#BA9D5A]" : "text-gray-400"}`}
              >
                Главная
              </a>
              {user && (
                <>
                  <a
                    onClick={() => navigate("/profile")}
                    className={`cursor-pointer ${currentUrl === "profile" ? "text-[#BA9D5A]" : "text-gray-400"}`}
                  >
                    Профиль
                  </a>
                  <a
                    onClick={() => navigate("/stats")}
                    className={`cursor-pointer ${currentUrl === "stats" ? "text-[#BA9D5A]" : "text-gray-400"}`}
                  >
                    Статистика
                  </a>
                  <div className="text-gray-400">
                    Дней в ударном режиме: <span className="text-white">{user.streak_days}</span>
                  </div>
                </>
              )}
            </nav>
          </div>
          <a onClick={() => navigate(user ? "/profile" : "/login")}
             className="flex items-center space-x-2 rounded mt-3 cursor-pointer">
            <User size={20}/>
            {user? (
              <span>{user.username}</span>
            ) : (
              <span>Войти</span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;

export interface UserBase {
  username: string;
  password: string;
  ac_creation_time?: string | null;
  last_activity?: string | null;
  points?: number;
  quizes_done?: string;
  ach_done?: string;
  likes?: number;
  dislikes?: number;
  films_watched?: number;
  streak_days?: number;
}
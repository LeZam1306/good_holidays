import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getUserFetch } from "../services/user/getUserFetch";

interface UserInfos {
  pseudo: string;
  creationDate: string;
  _id: string;
  verified: boolean;
}
interface Store extends UserInfos {
  setUserInfos: (userInfos: UserInfos) => void;
  fetchUser: () => void;
  connected: boolean;
  changePseudo: (pseudo: string) => void;
}

export const useAppStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        pseudo: "",
        creationDate: "",
        _id: "",
        connected: false,
        verified: false,
        setUserInfos: (usersInfos) => {
          set({
            pseudo: usersInfos.pseudo,
            creationDate: usersInfos.creationDate,
            _id: usersInfos._id,
          });
        },
        changePseudo: (pseudo: string) => {
          set({ pseudo: pseudo });
        },
        fetchUser: async () => {
          try {
            const res = await getUserFetch();
            const userInfo = res.data;
            set({ ...userInfo, connected: true });
          } catch (e) {
            set({ connected: false });
            console.log("User not connected: " + e);
          }
        },
      }),
      { name: "userInfos" }
    )
  )
);

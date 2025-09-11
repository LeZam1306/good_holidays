import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserInfos {
  pseudo: string;
  creationDate: string;
  id: string;
}
interface Store extends UserInfos {
  setUserInfos: (userInfos: UserInfos) => void;
}

export const useAppStore = create<Store>()(
  devtools((set) => ({
    pseudo: "",
    creationDate: "",
    id: "",
    setUserInfos: (usersInfos) => {
      set({
        pseudo: usersInfos.pseudo,
        creationDate: usersInfos.creationDate,
        id: usersInfos.id,
      });
    },
  }))
);

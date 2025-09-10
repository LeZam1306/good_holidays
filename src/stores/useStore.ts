import { create } from "zustand";

interface UserInfos {
  email: string;
  creationDate: string;
  id: string;
}
interface Store extends UserInfos {
  setUserInfos: (userInfos: UserInfos) => void;
}

const useStore = create<Store>()((set) => ({
  email: "",
  creationDate: "",
  id: "",
  setUserInfos: (usersInfos) => {
    set({
      email: usersInfos.email,
      creationDate: usersInfos.creationDate,
      id: usersInfos.id,
    });
  },
}));

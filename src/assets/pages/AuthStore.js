import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,

  user: {
    firstName: "",
    lastName: "",
    email: "",
  },

  login: (data) => {
    if (!data?.email) return;

    set({
      isLoggedIn: true,
      user: {
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email,
      },
    });
  },

  logout: () => {
    set({
      isLoggedIn: false,
      user: { firstName: "", lastName: "", email: "" },
    });
  },
}));

export default useAuthStore;

// file to cerate types for the application

// login type
export type LoginType = {
  email: string;
  password: string;
};

// signup type
export type SignupType = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phoneNumber: string;
};

// tigger type
export interface TriggerType {
  trigger: string;
  setTrigger: (value: string) => void;
}

// creating the interface for the user store
export interface UserStore {
  isAuthorized: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    profileImage: string;
  } | null;
  isLoggedIn: (user: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    profileImage: string;
  }) => void;
  isLoggedOut: () => void;
}

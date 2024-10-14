interface ProfileForm {
    id: number;
    name: string;
    photo: string
    email: string;
    bio?: string;
  
  }
export const validate = (user: ProfileForm) => {
  const errors: Partial<Record<keyof ProfileForm, string>> = {};

  if (!user.name) {
    errors.name = "Name is required";
  }

  if (!user.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email is invalid";
  }

  

  return errors;
  };

import { useEffect, useState } from 'react';
import { ProfileData } from '@/types/interfaces';
import dataUser from "../mocks/dataUser.json";
const allUsers = dataUser.map((user) => {
    return ({
        id: user.user_id,
        name: user.user_name,
        photo: user.user_photo,
        email: user.user_email,
        bio: user.user_bio,
    });
});
const users=allUsers[0];

const useProfile = () => {
    
    const storedUser = localStorage.getItem('userProfile');
  const initialProfile = storedUser ? JSON.parse(storedUser) : users;
  const [user, setUser] = useState<ProfileData>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileData, string>>>({});

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }, [user]);

  const handleEdit = (bol: boolean) => {
    setIsEditing(bol);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleCancel = (initialUser: ProfileData) => {
    setUser(initialUser);
    setIsEditing(false);
  };

  return {
    user,
    isEditing,
    errors,
    setErrors,
    handleEdit,
    handleChange,
    handleCancel,
    setUser,
  };
};

export default useProfile;
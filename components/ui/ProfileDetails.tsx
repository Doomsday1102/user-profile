// ProfileDetails.tsx
import React from "react";
import Image from "next/image";
import { ProfileData } from "@/types/interfaces";

interface ProfileDetailsProps {
  user: ProfileData;
  handleEdit: (isEditing: boolean) => void;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  user,
  handleEdit,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <Image
        src={user.photo}
        alt={user.name}
        width={300}
        height={300}
        className="rounded-full shadow-lg mb-4 bg-gray-200"
      />
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <div className="w-full mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Bio</h3>

        <p className="text-gray-600">{user.bio}</p>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          onClick={() => handleEdit(true)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;

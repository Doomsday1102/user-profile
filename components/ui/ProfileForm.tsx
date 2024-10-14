import { ProfileData } from "@/types/interfaces";
import React from "react";

interface ProfileFormProps {
  user: ProfileData;
  errors: Partial<Record<keyof ProfileData, string>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleCancel: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  user,
  errors,
  handleChange,
  handleSubmit,
  handleCancel,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="bio" className="mb-2">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={user.bio}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.bio && <p className="text-red-500">{errors.bio}</p>}
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;

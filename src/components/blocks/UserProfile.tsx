import React from 'react';
import { LocationIcon } from '../ui/Icons';

interface UserProfileProps {
  name: string;
  location: string;
  avatar: string;
  projects: number;
  followers: number;
  following: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  location,
  avatar,
  projects,
  followers,
  following,
}) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card flex flex-col items-center w-[260px]">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Name */}
      <h3 className="text-dark-grey-900 text-xl font-bold tracking-[-0.4px] mb-1">{name}</h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-grey-600 mb-6">
        <LocationIcon className="w-4 h-4" />
        <span className="text-sm font-medium">{location}</span>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 w-full border-t border-grey-200 pt-4">
        <div className="flex flex-col items-center">
          <span className="text-xs text-grey-600 font-medium">Projects</span>
          <span className="text-dark-grey-900 font-bold text-lg">{projects}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-grey-600 font-medium">Followers</span>
          <span className="text-dark-grey-900 font-bold text-lg">{followers}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-grey-600 font-medium">Following</span>
          <span className="text-dark-grey-900 font-bold text-lg">{following}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

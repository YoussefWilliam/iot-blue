import React from "react";

interface Props {
  picture: string;
  id: string;
  lastName: string;
}
const UserHeader: React.FC<Props> = ({ picture, id, lastName }) => {
  return (
    <div>
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          {picture && (
            <img
              alt="profil"
              src={picture}
              className="mx-auto object-cover rounded-full h-16 w-16 "
            />
          )}
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-gray-600 dark:text-white text-lg font-medium">
            {lastName}
          </span>
          <span className="text-gray-400 text-xs">{id}</span>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;

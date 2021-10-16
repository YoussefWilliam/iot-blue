import React from "react";

const Header: React.FC = () => {
  return (
    <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        User database
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
        Details and informations about user.
      </p>
    </div>
  );
};

export default Header;

import React from "react";

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  title: string;
  handleOnUserClick: (id: string) => void;
}
const ListCard: React.FC<Props> = ({
  title,
  id,
  firstName,
  lastName,
  picture,
  handleOnUserClick,
}) => {
  return (
    <div>
      <li className="border-gray-400 flex flex-row mb-2" key={id}>
        <div
          className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
          onClick={(e) => {
            e.preventDefault();
            handleOnUserClick(id);
          }}
        >
          <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <img
              alt="profil"
              src={picture}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div className="flex-1 pl-1 md:mr-16">
            <div className="font-medium dark:text-white">{firstName}</div>
            <div className="text-gray-600 dark:text-gray-200 text-sm">
              {lastName}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-200 text-xs">
            {title}
          </div>
          <button className="w-24 text-right flex justify-end">
            <svg
              width="12"
              fill="currentColor"
              height="12"
              className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </li>
    </div>
  );
};

export default ListCard;

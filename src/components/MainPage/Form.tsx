import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import { createNewUser, newUserInfo } from "./createUserSlice";

const Form: React.FC = () => {
  const [newUser, setNewUser] = useState<any>({
    firstName: null,
    lastName: null,
    email: null,
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const addedUserInfo = useAppSelector(newUserInfo);

  const handleChangeInput = (key: string, value: string) => {
    setNewUser({ ...newUser, [key]: value });
  };

  const handleOnSubmit = () => {
    if (newUser.firstName && newUser.lastName && newUser.email) {
      let { firstName, lastName, email } = newUser;
      dispatch(createNewUser({ firstName, lastName, email }));
    } else {
      alert("Please make sure data is valid");
    }
  };

  useEffect(() => {
    if (addedUserInfo.data) {
      const id = addedUserInfo.data.id;
      history.push(`/user/${id}`);
    }
  }, [addedUserInfo, history]);
  return (
    <div>
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new user
        </div>
        <div className="p-3 mt-8">
          <form>
            <div className="flex flex-col mb-2">
              <div className="relative py-2">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="First name"
                  placeholder="First name"
                  onChange={(e) => {
                    e.preventDefault();
                    handleChangeInput("firstName", e.target.value);
                  }}
                />
              </div>
              <div className="relative py-2">
                <input
                  type="text"
                  id="create-account-last-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="Last name"
                  placeholder="Last name"
                  onChange={(e) => {
                    e.preventDefault();
                    handleChangeInput("lastName", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="relative ">
                <input
                  type="email"
                  id="create-account-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  onChange={(e) => {
                    e.preventDefault();
                    handleChangeInput("email", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleOnSubmit();
                }}
                type="submit"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

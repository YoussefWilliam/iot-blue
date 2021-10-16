import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../common/Header";
import ListCard from "../../common/ListCard";
import Spinner from "../../common/Spinner";
import { useAppSelector } from "../../redux/hooks";
import { fetchUsersList, usersListInfo } from "./usersListSlice";

const List: React.FC = () => {
  const [userData, setUserData] = useState<any>({
    data: null,
    isLoading: "idle",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const usersList = useAppSelector(usersListInfo);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  useEffect(() => {
    setUserData({
      data: usersList?.data?.data,
      isLoading: usersList?.status,
    });
  }, [usersList]);

  const handleOnUserClick = (id: string) => {
    history.push(`user/${id}`);
  };

  return (
    <div>
      {userData.isLoading === "loading" ? (
        <Spinner />
      ) : (
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
          <Header />
          <ul className="w-full flex flex-col">
            {userData?.data?.map((user: any) => {
              const { picture, lastName, firstName, id, title } = user || {};
              return (
                <ListCard
                  picture={picture}
                  lastName={lastName}
                  firstName={firstName}
                  id={id}
                  title={title}
                  handleOnUserClick={handleOnUserClick}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;

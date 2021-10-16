import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBirthdayDate } from "../../common/helpers";
import ListDetails from "../../common/ListDetails";
import Spinner from "../../common/Spinner";
import UserHeader from "../../common/UserHeader";
import { useAppSelector } from "../../redux/hooks";
import { fetchUserDetails, userDetailsInfo } from "./userDetailsSlice";

interface Props {
  match: any;
}
const UserPage: React.FC<Props> = ({ match }) => {
  const [userData, setUserData] = useState<any>({
    data: null,
    isLoading: "idle",
  });
  const dispatch = useDispatch();
  const id = match.params.id;
  const userDetails = useAppSelector(userDetailsInfo);

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUserData({
      data: userDetails?.data,
      isLoading: userDetails?.status,
    });
  }, [userDetails]);

  const {
    firstName,
    lastName,
    picture,
    gender,
    email,
    dateOfBirth,
    phone,
    location,
  } = userData.data || {};

  const myDate = getBirthdayDate(dateOfBirth);

  return (
    <div>
      {userData.isLoading === "loading" ? (
        <Spinner />
      ) : (
        <section>
          <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
            <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
              <UserHeader picture={picture} id={id} lastName={lastName} />
            </div>

            <div className="flex flex-wrap -mx-8 py-6">
              <div className="w-full lg:w-1/2 px-8">
                <ul className="space-y-12">
                  <ListDetails
                    count={1}
                    header="First Name"
                    content={firstName}
                    key={`${id}-${firstName}`}
                  />
                  <ListDetails
                    count={2}
                    header="Last Name"
                    content={lastName}
                    key={`${id}-${lastName}`}
                  />
                  <ListDetails
                    count={3}
                    header="Email"
                    content={email}
                    key={`${id}-${email}`}
                  />
                  {gender && (
                    <ListDetails
                      count={4}
                      header="Gender"
                      content={gender}
                      key={`${id}-${gender}`}
                    />
                  )}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-8">
                <ul className="space-y-12">
                  {dateOfBirth && (
                    <ListDetails
                      count={5}
                      header="Date of Birth"
                      content={myDate}
                      key={`${id}-${dateOfBirth}`}
                    />
                  )}
                  {phone && (
                    <ListDetails
                      count={6}
                      header="Phone"
                      content={phone}
                      key={`${id}-${phone}`}
                    />
                  )}
                  {location && (
                    <ListDetails
                      count={6}
                      header="Address"
                      content={location}
                      key={`${id}-${location}`}
                      isLocation={true}
                    />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserPage;

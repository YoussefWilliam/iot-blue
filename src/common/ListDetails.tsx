import React from "react";

interface Props {
  key: string;
  header: string;
  content: any;
  count: number;
  isLocation?: boolean;
}

interface Content {
  city: string;
  country: string | {};
  state: string | {};
  street: string | {};
}
const ListDetails: React.FC<Props> = ({
  key,
  header,
  content,
  count,
  isLocation,
}) => {
  const { city, country, state, street }: Content = content || {};

  return (
    <li className="flex -mx-4" key={key}>
      <div className="px-4">
        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
          {count}
        </span>
      </div>
      <div className="px-4">
        <h3 className="my-4 text-xl font-semibold dark:text-white">{header}</h3>
        {isLocation ? (
          <>
            <div className="flex flex-row leading loose">
              <p className="font-medium">City:</p>
              <p className="text-gray-500 px-1">{city}</p>
            </div>
            <div className="flex flex-row leading loose">
              <p className="font-medium">Country:</p>
              <p className="text-gray-500 px-1">{country}</p>
            </div>
            <div className="flex flex-row leading loose">
              <p className="font-medium">State:</p>
              <p className="text-gray-500 px-1">{state}</p>
            </div>
            <div className="flex flex-row leading loose">
              <p className="font-medium">Street:</p>
              <p className="text-gray-500 px-1">{street}</p>
            </div>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-300 leading-loose">
            {content}
          </p>
        )}
      </div>
    </li>
  );
};

export default ListDetails;

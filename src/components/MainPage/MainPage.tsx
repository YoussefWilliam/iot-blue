import React from "react";
import Form from "./Form";
import MainList from "./MainList";

const MainPage: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-6 md:col-span-2">
        <MainList />
      </div>
      <div className="col-span-6 md:col-span-1">
        <Form />
      </div>
    </div>
  );
};

export default MainPage;

export const getBirthdayDate = (birthdayDate: string) => {
  const date = new Date(birthdayDate);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};


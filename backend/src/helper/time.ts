import moment from "moment";

export const UTCformat = (dateTimeString: string): Date => {
  const dateTime = new Date(dateTimeString);
  const dateTimeNumber = dateTime.getTime();
  const dateTimeOffset = dateTime.getTimezoneOffset() * 60000;
  const dateTimeUTC = new Date();
  dateTimeUTC.setTime(dateTimeNumber - dateTimeOffset);

  return dateTimeUTC;
};

export const UTCArrayFormat = () => {
  const dateTime = new Date(moment().format());
  // const dateTimeNumber = dateTime.getTime();
  // const dateTimeOffset = dateTime.getTimezoneOffset() * 60000;
  // const dateTimeUTC = new Date();
  // dateTimeUTC.setTime(dateTimeNumber - dateTimeOffset);

  const newdate = {
    date: dateTime.getDate(),
    month: dateTime.getMonth() + 1,
    year: dateTime.getFullYear(),
    hour: dateTime.getHours(),
    minute: dateTime.getMinutes(),
    day: dateTime.getDay(),
  };

  return newdate;
};

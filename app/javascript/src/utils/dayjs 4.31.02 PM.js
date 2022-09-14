import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const calculateCreatedAgo = date => {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
};

export const calculateCreatedDayAndTime = date => {
  date = new Date(date);
  return dayjs(date).format("dddd, h:mm A");
};

// standard format : Month, day(0-6), year
export const convertDateToStdFormat = date =>
  dayjs(date).format("MMM, d, YYYY");

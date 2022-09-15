import dayjs from "dayjs";

export const calculateCreatedAgo = date => dayjs(date).fromNow();

export const calculateCreatedDayAndTime = date =>
  dayjs(date).format("dddd, h:mm A");

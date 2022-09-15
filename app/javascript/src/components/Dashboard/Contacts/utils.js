import dayjs from "dayjs";

export const convertDateToStdFormat = date =>
  dayjs(date).format("MMM, d, YYYY");

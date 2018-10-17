export const getMonthString = (month) => {
  let cleanMonth;
  switch (month) {
    case "01":
      cleanMonth = "JANUARY";
      break;
    case "02":
      cleanMonth = "FEBRUARY";
      break;
    case "03":
      cleanMonth = "MARCH";
      break;
    case "04":
      cleanMonth = "APRIL";
      break;
    case "05":
      cleanMonth = "MAY";
      break;
    case "06":
      cleanMonth = "JUNE";
      break;
    case "07":
      cleanMonth = "JULY";
      break;
    case "08":
      cleanMonth = "AUGUST";
      break;
    case "09":
      cleanMonth = "SEPTEMBER";
      break;
    case "10":
      cleanMonth = "OCTOBER";
      break;
    case "11":
      cleanMonth = "NOVEMBER";
      break;
    case "12":
      cleanMonth = "DECEMBER";
      break;
    default: return;
  }
  return cleanMonth;
}

export const concatDates = (month, day) => {
  const cleanDate = month.concat((' '), day);
  return cleanDate;
}

export const checkDay = (day) => {
  let cleanDay = day;
  switch (day) {
    case "01":
      cleanDay = "1";
      break;
    case "02":
      cleanDay = "2";
      break;
    case "03":
      cleanDay = "3";
      break;
    case "04":
      cleanDay = "4";
      break;
    case "05":
      cleanDay = "5";
      break;
    case "06":
      cleanDay = "6";
      break;
    case "07":
      cleanDay = "7";
      break;
    case "08":
      cleanDay = "8";
      break;
    case "09":
      cleanDay = "9";
      break;
    default: return day;
  }
  return cleanDay;
}

export const validateBirthday = (day, month, year) => {
  const parseDay = parseInt(day);
  const parseMonth = parseInt(month);
  const parseYear = parseInt(year);
  const dateTotal = parseDay + parseMonth + parseYear;
  if (dateTotal > 1972 && dateTotal < 2039) {
    return true;
  } else {
    return "error";
  }
}

import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.value.getDay()];
  let hours = props.value.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.value.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}

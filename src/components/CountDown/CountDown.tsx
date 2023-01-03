import React, { useEffect, useReducer, useRef, useState } from "react";

interface ICountDownProps {
  hours: number;
  mins: number;
  secs: number;
  classes: string;
}

interface IReducerState {
  hours: number;
  mins: number;
  secs: number;
}

function reducer(state: IReducerState, action: string) {
  let updatedSecs = 0;
  let updatedMins = 0;
  let updatedHours = 0;

  if (state.secs <= 0) {
    updatedSecs = 60;
    updatedMins = state.mins - 1;
  } else {
    updatedSecs = state.secs - 1;
    updatedMins = state.mins;
  }

  if (state.mins <= 0 && state.secs <= 0) {
    updatedMins = 60;
    updatedHours = state.hours - 1;
  } else {
    updatedHours = state.hours;
  }

  return { hours: updatedHours, mins: updatedMins, secs: updatedSecs };
}

function CountDown(props: ICountDownProps) {
  const [state, dispatch] = useReducer(reducer, {
    hours: props.hours,
    mins: props.mins,
    secs: props.secs,
  });

  const interval = useRef<number | null>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      dispatch("reduce");
      if (state.hours <= 0 && state.mins <= 0 && state.secs <= 0) {
        clearInterval(interval.current!);
      }
    }, 1000);

    return () => {
      clearInterval(interval.current!);
    };
  }, [props]);

  return (
    <div className={`w-fit h-[10ch] p-4 bg-fade ${props.classes}`}>
      <p className={`w-[50ch] flex flex-row items-center justify-between`}>
        <span className={`font-bold`}>GRAND OPENING</span>
        <span>All items are 25% Discount for New Member!</span>
      </p>
      <div
        className={`relative -bottom-[5px] -left-[50px] w-[15ch] p-4 flex flex-row items-center justify-center gap-4 text-white font-bold text-5xl bg-primary`}>
        <span>{state.hours}</span>
        <span>:</span>
        <span>{state.mins}</span>
        <span>:</span>
        <span>{state.secs}</span>
      </div>
    </div>
  );
}

export default CountDown;

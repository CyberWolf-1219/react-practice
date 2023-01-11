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
    <div className={ `countdown w-[50ch] h-[10ch]  ${props.classes}` }>
      <p className={ `countdown_panel absolute w-full h-full p-4 bg-fade` }>
        <span className={ `font-bold` }>GRAND OPENING </span>
        <span>All items are 25% Discount for New Member!</span>
      </p>
      <div className={ `countdown_panel absolute -bottom-[70%] -left-[50px] w-full h-full p-4 flex flex-row items-center justify-center gap-4 text-white font-bold text-5xl bg-primary/90` }>
        <span>{ String(state.hours).padStart(2, '0') }</span>
        <span>:</span>
        <span>{ String(state.mins).padStart(2, "0") }</span>
        <span>:</span>
        <span>{ String(state.secs).padStart(2, "0") }</span>
      </div>
    </div>
  );
}

export default CountDown;

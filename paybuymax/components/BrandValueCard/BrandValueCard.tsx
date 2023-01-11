import React from "react";

interface IBrandValueCardProps {
  image: string;
  title: string;
  text: string;
}

function BrandValueCard(props: IBrandValueCardProps) {
  return (
    <div className={ `brand_value_card aspect-square w-full h-full min-w-[300px] max-w-[400px] p-4 flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-[0_0_10px_0px] shadow-black/20` }>
      <div className={ `aspect-[2/1.5] w-[50%]` }>
        <img src={ props.image } alt="" className={ `w-full h-full object-contain` } />
      </div>
      <h3>{ props.title }</h3>
      <p>{ props.text }</p>
    </div>
  );
}

export default BrandValueCard;

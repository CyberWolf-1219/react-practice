function AvatarCard({
  avatar,
  name,
  role_1,
  role_2,
}: {
  avatar: string;
  name: string;
  role_1: string;
  role_2: string;
}) {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="relative w-[150px] h-[150px]">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[110px] h-[110px] ">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full bg-white rounded-full"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[95%] h-[95%] bg-black rounded-full"></div>
        </div>
        <img
          src={avatar}
          alt=""
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[55%] w-full h-full object-contain"
        />
      </div>
      <div className="w-max font-semibold text-accent text-center">
        <div className="text-white">{name}</div>
        <div className="leading-[1.2]">{role_1}</div>
        <div className="leading-[1.2]">{role_2}</div>
      </div>
    </div>
  );
}

export default AvatarCard;

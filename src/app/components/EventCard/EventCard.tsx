import { IEvent } from "@/core/types/IEvent";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  value: IEvent;
}

const EventCard: FC<IProps> = ({ value }) => {
  return (
    <div
      className=" p-10 text-center bg-blue-600"
    >
        <Image src={value.imageAddress} alt={value.title} width={200} height={200} />
      <h5 className="">title:{value.title}</h5>
      <p className="">Category:{value.category}</p>
    </div>
  );
};

export default EventCard;

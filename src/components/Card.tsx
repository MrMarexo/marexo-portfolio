import Image from "next/image";
import { FCC } from "../types/types";
import { Arrow } from "./icons/Icons";
import Link from "next/link";

const Badge: FCC = ({ children }) => (
  <div className="rounded-[20px] bg-my_green-dark px-4 py-[2px] text-[13px] text-my_green shadow-md">
    {children}
  </div>
);

export const Card: FCC<{
  image?: string;
  timePeriod?: string;
  title: string;
  position?: string;
  badges?: Array<string>;
  link: string;
}> = ({ image, children, timePeriod, title, position, badges, link }) => {
  return (
    <Link href={link} target="_blank">
      <div className="group flex cursor-pointer flex-col items-start gap-5 rounded-lg bg-[#41505726] p-4 transition-all duration-200 hover:bg-[#41505726] hover:shadow-lg lg:flex-row lg:bg-transparent">
        {image ? (
          <Image
            src={image}
            alt="fitleague"
            height={110}
            width={140}
            className="mt-2 rounded-sm border-[1px] border-neutral-400 object-contain transition-colors duration-200 group-hover:border-neutral-200"
          />
        ) : (
          timePeriod && (
            <div className="w-[100px] flex-shrink-0 pt-[5px] text-xs font-[500] uppercase text-gray-400">
              {timePeriod}
            </div>
          )
        )}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <h3 className="text-lg transition-colors duration-200 group-hover:text-my_green">
              {position ? `${position} •` : ""} {title}
            </h3>
            <div className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <Arrow />
            </div>
          </div>
          <p className="mb-4 text-sm font-[300] leading-6 text-my_white transition-colors  duration-200 group-hover:text-my_white lg:text-gray-400">
            {children}
          </p>
          {badges && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <Badge key={i}>{badge}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

"use client";
import Image from "next/image";
import Link from "next/link";
import collegeClass from "../../public/assets/images/collegeClass.webp";
import { HoverCardContent } from "@/components/ui/hover-card";
import { MegaMenuProps } from "@/types";



const MegaMenu = ({ menuItems }: MegaMenuProps) => {
  

  return (
    <HoverCardContent
      sideOffset={30}
      className="flex w-fit border-0 border-b-5 border-[var(--teal-900)] shadow-xl px-14 py-9 justify-between bg-[var(--teal-100)] gap-x-0 lg:gap-x-20"
    >
      <div className="flex gap-8">
        <nav className="lg:w-[260px] w-[300px] xl:w-[300px]">
          {menuItems[1]?.children?.slice(0, 4).map((ele, i: number) => (
            <Link
              href={ele.href}
              key={i}
              className="relative block group text-2xl lg:text-xl xl:text-2xl text-[var(--teal-900)] p-4 border-b-2 border-b-[#DDDDDD]"
            >
              <span className="z-2 relative">{ele.label}</span>
              <span className="bg-[var(--teal-200)] absolute left-0 w-0 duration-300 ease-in-out h-full z-1 top-0 group-hover:w-full"/>
            </Link>
          ))}
        </nav>
        <nav className="lg:w-[260px] w-[300px] xl:w-[300px]">
          {menuItems[1]?.children?.slice(4).map((ele, i: number) => (
            <Link
              href={ele.href}
              key={i}
              className="relative block group text-2xl lg:text-xl xl:text-2xl text-[var(--teal-900)] p-4 border-b-2 border-b-[#DDDDDD]"
            >
              <span className="z-2 relative">{ele.label}</span>
              <span className="bg-[var(--teal-200)] absolute left-0 w-0 duration-300 ease-in-out h-full z-1 top-0 group-hover:w-full"/>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <Image
          src={collegeClass}
          alt={"College class"}
          width={302}
          className="hidden lg:block"
        />
      </div>
    </HoverCardContent>
  );
};

export default MegaMenu;

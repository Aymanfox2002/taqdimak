'use client';
import Image from "next/image";
import Link from "next/link";
import collegeClass from "../../public/assets/images/collegeClass.png";
import { motion } from "framer-motion";
const MegaMenu = ({ menuItems }: { menuItems: any }) => {
  return (
    <motion.nav
      className="flex border-b-5 border-[var(--teal-900)] shadow-xl container px-14 py-9  justify-between absolute bg-[var(--teal-100)] left-1/2 transform -translate-x-1/2 top-[72px]"
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: 100,
        opacity: 0,
        transition : {
          delay: 1
        }
      }}
    
    >
      <div className="flex gap-8">
        <ul className="lg:w-[260px] w-[300px] xl:w-[300px]">
          {menuItems[2].children.slice(0, 4).map((ele, i: number) => (
            <Link
              href={ele.href}
              key={i}
              className="relative block group text-2xl lg:text-xl xl:text-2xl text-[var(--teal-900)] p-4 border-b-2 border-b-[#DDDDDD]"
            >
              <li>{ele.label}</li>
              <span className="bg-[var(--teal-200)] absolute left-0 w-0 duration-300 ease-in-out h-full -z-1 top-0 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>
        <ul className="lg:w-[260px] w-[300px] xl:w-[300px]">
          {menuItems[2].children.slice(4).map((ele, i: number) => (
            <Link
              href={ele.href}
              key={i}
              className="relative block group text-2xl lg:text-xl xl:text-2xl text-[var(--teal-900)] p-4 border-b-2 border-b-[#DDDDDD]"
            >
              <li>{ele.label}</li>
              <span className="bg-[var(--teal-200)] absolute left-0 w-0 duration-300 ease-in-out h-full -z-1 top-0 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>
      </div>

      <Image
        src={collegeClass}
        alt={"College class"}
        width={302}
        className="hidden lg:block"
      />
    </motion.nav>
  );
};

export default MegaMenu;

import React from "react";

type mediaType = {
  href: string;
  icon: any;
  label: string;
};

const SocialMediaLinks = ({ href, icon, label }: mediaType) => {
  return (
    <span
      className="flex justify-center items-center w-9 h-9 rounded-lg bg-[var(--teal-500)] btn-animation group relative cursor-pointer"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-[var(--teal-900)] group-hover:text-white transition-all duration-400 z-10 w-full h-full flex justify-center items-center"
      >
        {icon}
      </a>
    </span>
  );
};

export default SocialMediaLinks;

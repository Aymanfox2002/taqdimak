import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--teal-100)] z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[var(--heading-black)]" />
    </div>
  );
};

export default Loading;

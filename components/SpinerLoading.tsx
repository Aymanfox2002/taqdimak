import React from "react";

const SpinerLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--teal-100)]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[var(--heading-black)]" />
    </div>
  );
};

export default SpinerLoading;

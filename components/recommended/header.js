import React from "react";

export default function RecomHeader({ title, color }) {
  return (
    <div className={`p-4  text-xl text-gray-900 font-bold bg-yellow-500 uppercase`}>
      {title}
    </div>
  );
}

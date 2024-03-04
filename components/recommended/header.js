import React from "react";

export default function RecomHeader({ title, color }) {
  return (
    <div className={`${color} p-4  text-xl text-white uppercase`}>
      {title}
    </div>
  );
}

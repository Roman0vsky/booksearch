import React from "react";
import "./MySelect.css";

type MySelectProps = {
  children: React.ReactNode;
};

export default function MySelect({ children }: MySelectProps) {
  return <select className="MySelect">{children}</select>;
}

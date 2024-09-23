"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./header.css";

export function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    };
    const formattedDate = now.toLocaleDateString("pt-BR", options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header>
      <div>
        <Image src="/logo.png" width={150} height={36} alt="logo" />
      </div>

      <div>
        <h1>Bem-vindo de volta, Marcus</h1>
      </div>

      <div>
        <p>{currentDate}</p>
      </div>
    </header>
  );
}

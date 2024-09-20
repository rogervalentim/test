import Image from "next/image";
import "./header.css";

export function Header() {
  return (
    <header>
      <div>
        <Image src="/logo.png" width={150} height={36} alt="logo" />
      </div>

      <div>
        <h1>Bem-vindo de volta, Marcus</h1>
      </div>

      <div>
        <p>Segunda, 01 de dezembro de 2025</p>
      </div>
    </header>
  );
}

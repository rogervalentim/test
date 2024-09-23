import { Header } from "@/src/components/header/header";

import "./page.css";
import { Form } from "@/src/components/form/form";

export default function Home() {
  return (
    <>
      <div className="container-header">
        <Header />
      </div>

      <div className="container-form">
        <Form />
      </div>
    </>
  );
}

"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Facebook = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  return (
    <div>
      Facebook
      <div>
        <Button variant="success">Hoi</Button>
        <button onClick={() => handleBtn()}>Back home</button>
      </div>
    </div>
  );
};

export default Facebook;

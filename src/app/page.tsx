"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";

export default function Home() {
  return (
    <>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
        <li>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
      </ul>
    </>
  );
}

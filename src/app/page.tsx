"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/blogs");
    const result = await response.json();
    console.log(response);
    console.log(result);
  };

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

      <AppTable />
    </>
  );
}

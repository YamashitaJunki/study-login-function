import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        {user && (
          <div>
            <h2>ようこそ{user.name}さん</h2>
            <p>会員限定ページ</p>
            <Link href="photo/etan">写真集</Link>
          </div>
        )}
        {!user && (
          <div>
            <h2>Members Only.</h2>
            <Link href="/api/auth/login">
              <Image
                src="/login.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </Link>{" "}
          </div>
        )}
      </main>
    </div>
  );
}

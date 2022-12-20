import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getPhotoList } from "../../lib/getPhotoList";
import Link from "next/link";
import Image from "next/image";

const photoList = getPhotoList();

export default function Etan() {
  const { user, error, isLoading } = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        {user && (
          <div>
            <h2>アルバム集</h2>
            {photoList.map((item) => {
              return (
                <p key="index">
                  <div>{item.title}</div>
                  <Image
                    src={item.src}
                    width={1000}
                    height={1000}
                    alt="picture"
                  />
                </p>
              );
            })}
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
                alt="login icon"
              />
            </Link>{" "}
          </div>
        )}
      </main>
    </div>
  );
}

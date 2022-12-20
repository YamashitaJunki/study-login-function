import { FC } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const Header: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <header className="header">
        <div className="name"> {user.name} さん</div>
        <div>
          <Link href="/api/auth/logout">
            <Image
              src="/logout.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="name"></div>
    </header>
  );
};

export default Header;

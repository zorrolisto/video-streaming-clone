"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { RiTvFill } from "react-icons/ri";
import { MdMovie } from "react-icons/md";
import {
  SLinkWrapper,
  SLinksContainer,
  SNavBar,
  SProfilePhoto,
} from "./Nav.styled";

export const Nav = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "HOME", Icon: AiFillHome },
    { href: "/peliculas", label: "PELICULAS", Icon: MdMovie },
    { href: "/series", label: "SERIES", Icon: RiTvFill },
  ];

  return (
    <SNavBar>
      <SLinksContainer>
        {navLinks.map(({ href, label, Icon }, idx) => (
          <NavLink
            key={idx}
            href={href}
            pathname={pathname || ""}
            Icon={Icon}
            label={label}
          />
        ))}
      </SLinksContainer>
      <SProfilePhoto onClick={() => alert("Futura implementación")}>
        <Image
          alt="profile-photo"
          src="https://nextflix-azure.vercel.app/assets/avatar.png"
          width={32}
          height={32}
        />
      </SProfilePhoto>
    </SNavBar>
  );
};

interface IPropsNavLink {
  href: string;
  pathname: string;
  label: string;
  Icon: React.FC<{ size: number }>;
}
const NavLink = ({ href, pathname, Icon, label }: IPropsNavLink) => (
  <Link href={href}>
    <SLinkWrapper color={`${pathname === href ? "white" : "#d0d0d0"}`}>
      <Icon size={16} />
      <p>{label}</p>
    </SLinkWrapper>
  </Link>
);

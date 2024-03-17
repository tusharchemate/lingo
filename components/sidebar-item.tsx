"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

const SidebaItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <div>
      <Button
        variant={active ? "sidebarOutline" : "sidebar"}
        className="justify-start h-[52px]"
        asChild
      >
        <Link href={href}>
            <Image src={iconSrc} alt={iconSrc} height={32}  width={32} className="mr-5 "/>
            {label}</Link>
      </Button>
    </div>
  );
};

export default SidebaItem;

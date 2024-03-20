import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebaItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const sidebarItems = [
  { label: "learn", iconSrc: "/learn.svg", href: "/learn" },
  { label: "LeaderBoard", iconSrc: "/leaderboard.svg", href: "/leaderboard" },
  { label: "quests", iconSrc: "/quests.svg", href: "/quests" },
  { label: "shop", iconSrc: "/shop.svg", href: "/shop" },
];

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {sidebarItems?.map((item) => (
          <SidebaItem
            key={item.label}
            label={item.label}
            iconSrc={item.iconSrc}
            href={item.href}
          />
        ))}
      </div>
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <UserButton afterSignOutUrl="/" />
      </ClerkLoaded>
    </div>
  );
};

export default Sidebar;

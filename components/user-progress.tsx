import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCouse: any;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

  const UserProgress = ({activeCouse, hearts, points, hasActiveSubscription}: Props) => {
  return <div className="flex ietms-center  justify-between gap-x-2 w-full">
        <Link  href='/courses'>
            <Button >
                <Image src={activeCouse?.imgageSrc} alt={activeCouse.title} width={32} height={32} className="rounded-md border" />
            </Button>
        </Link>

        <Link  href='/shop'>
            <Button variant="ghost" className="text-orange-500">
                <Image src='./points.svg' alt='Points' width={28} height={28} className="mr-2" />
                {points}
            </Button>
        </Link>

        <Link  href='/shop'>
            <Button variant="ghost" className="text-rose-500">
                <Image src='./heart.svg' alt='Hearts' width={22} height={22} className="mr-2" />
                {hasActiveSubscription ? <InfinityIcon className="h-4 w-4"/> : hearts}
            </Button>
        </Link>

  </div>
};

export default UserProgress;

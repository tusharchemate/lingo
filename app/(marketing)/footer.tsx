import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="flex items-center h-full">
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/in.png"
            alt="India"
            height={25}
            width={34}
            className="mr-4 rounded-md"
          />
          Indain
        </Button>
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/hr.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>

        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};

export default Footer;

import Mobileheader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
    <Mobileheader/>
    <Sidebar className="hidden lg:flex" />
    <main className="lg:pl-[256px]  h-full pt-[50px] lg:pt-0">
      <div className="h-full max-w-[1056px] max-auto pt-6"> {children}</div>
    </main>
    </>
  );
};

export default layout;

'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h1 style={{ fontSize: 24, fontWeight: "800" }}>CanMart</h1>
    //   <Image
    //     onClick={() => router.push('/')}
    //     className="hidden md:block cursor-pointer" 
    //     src="/images/logo.png" 
    //     height="100" 
    //     width="100" 
    //     alt="Logo" 
    //   />
  );
}

export default Logo;

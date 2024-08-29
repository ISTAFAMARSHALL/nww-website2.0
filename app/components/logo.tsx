import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo/nww-logo-flat (1).png'

export default function Logo() {
  return (
    <>
    <Link href=".." className="inline-flex">
      <Image 
        style={{background: 'black', fill:'black' }}
        src={logo}
        alt='logo'
        width={120}
        height={250}
        priority
      />
    </Link>
    </>
  );
}

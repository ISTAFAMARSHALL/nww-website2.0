// import Link from "next/link";
// import Image from "next/image";
// import logo from '@/public/logo/nww-logo-flat (1).png'

// export default function Logo() {
//   return (
//     <>
//     <Link href=".." className="inline-flex">
//       <Image 
//         style={{background: 'black', fill:'black' }}
//         src={logo}
//         alt='logo'
//         width={120}
//         height={250}
//         priority
//       />
//     </Link>
//     </>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo/nwwcompasscolorLOGO.png';

export default function Logo() {
  return (
    <Link href=".." 
    className="inline-flex btn-sm 
    bg-[#F8577] text-[#F9F9F9] hover:bg-[#90FCF9] transition "
    >
      <Image
        src={logo}
        alt="logo"
        width={40}
        height={40}
        priority
        // style={{ backgroundColor: 'salmon' }} // Background color from the provided palette
      />
    </Link>
  );
}

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { LucideIcon } from 'lucide-react';
// // import { matchesPathname } from '@/lib/matchPath';

// interface NavItemProps {
//   icon: LucideIcon;
//   name: string;
//   path: string;
//   count?: number | null;
// }

// const NavItem = ({ icon: Icon, name, path, count }: NavItemProps) => {
//   const pathname = usePathname();
//   const isActive = matchesPathname(pathname as string, path);

//   return (
//     <Link href={path} className="mb-4 w-full">
//       <div
//         className={`relative flex cursor-pointer items-center gap-3 rounded-lg px-1 py-1 hover:bg-gray-50 ${isActive ? 'bg-primary/15 text-orange-500' : ''}`}
//       >
//         <div
//           className={`rounded-full p-2 ${
//             isActive ? '' : 'bg-gray-200 md:bg-transparent'
//           }`}
//         >
//           <Icon className="h-5 w-5" />
//         </div>

//         <span className="ml-1 hidden sm:block">{name}</span>

//         {count && (
//           <span className="flex h-5 w-5 items-center justify-center self-center rounded-full bg-orange-500 text-xs text-white">
//             {count}
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default NavItem;

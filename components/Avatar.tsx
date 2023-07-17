"use client";

import useActiveList from "@/hooks/useActiveList";
import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const {} = useActiveList();
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          fill
          src={user?.image || "/images/user.png"}
          alt="Profile-avatar"
        />
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-600 ring-2 top-0 right-0 ring-white h-2 w-2 md:h-3 md:w-3" />
      )}
    </div>
  );
};

export default Avatar;

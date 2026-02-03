import { UserCard } from "@/app/component/cards/UserCard";
import { ModeToggle } from "@/app/component/mode-toggle/mode-toggle";
import { Skeleton } from "./component/ui/skeleton";

export default function page() {
  return (
    <>
    <UserCard />
    <Skeleton />
    <ModeToggle />
    </>
  );
}



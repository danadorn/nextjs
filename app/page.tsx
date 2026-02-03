import { UserCard } from "@/component/cards/UserCard";
import { ModeToggle } from "@/component/mode-toggle/mode-toggle";
import { Skeleton } from "../component/ui/skeleton";

export default function page() {
  return (
    <>
    <UserCard />
    <Skeleton />
    <ModeToggle />
    </>
  );
}



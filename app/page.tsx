import { UserCard } from "@/component/cards/UserCard";
import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import { Skeleton } from "@/components/ui/skeleton";

export default function page() {
  return (
    <>
    <UserCard />
    <Skeleton />
    <ModeToggle />
    </>
  );
}

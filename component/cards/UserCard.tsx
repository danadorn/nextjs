import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { User } from "@/lib/types/userType";
async function loadProduct() {
  const response = await fetch("https://api.escuelajs.co/api/v1/users", {
    cache: "no-store",
  });
  return response.json();
}

export async function UserCard() {
  const users: User[] = await loadProduct();

  return (
    <div className="container mx-auto px-4 text-center">
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <Card
            key={user.id}
            className="group relative overflow-hidden rounded-3xl border bg-background/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Cover */}
            <div className="relative h-32 w-full">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Floating Avatar */}
            <div className="absolute left-1/2 top-20 z-10 -translate-x-1/2">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-20 w-20 rounded-full border-4 border-background object-cover shadow-lg transition group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <CardHeader className="pt-14 text-center">
              <Badge
                variant="secondary"
                className="mx-auto mb-2 w-fit capitalize"
              >
                {user.role}
              </Badge>

              <CardTitle className="text-lg font-semibold">
                {user.name}
              </CardTitle>

              <CardDescription className="truncate text-sm">
                {user.email}
              </CardDescription>
            </CardHeader>

            {/* Footer */}
            <CardFooter className="pb-6">
              <Button
                variant="outline"
                className="w-full rounded-xl transition group-hover:bg-primary group-hover:text-primary-foreground"
              >
                View Profile →
              </Button>
            </CardFooter>

            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

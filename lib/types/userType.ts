export type User ={
  id: number;
  email: string;
  password: string;
  name: string;
  role: "customer" | "admin" | "seller";
  avatar: string;
  creationAt: string;
  updatedAt: string;
}
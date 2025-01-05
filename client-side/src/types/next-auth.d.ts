// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | null;
      name: string | null;
      email: string | null;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string | null;
    name: string | null;
    email: string | null;
  }
}

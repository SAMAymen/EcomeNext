import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface User {
    id: string;
    username?: string | null;
    email: string;
    image?: string | null;
    permissions: Record<string, boolean>;
  }

  interface Session {
    user?: User & {
      id: string;
      username: string;
    };
  }

  interface JWT {
    id?: string;
    username?: string;
    email?: string;
    image?: string;
    permissions?: Record<string, boolean>;
  }
}

const verifyCredentials = async (
  email: string,
  password: string
): Promise<any> => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return null;
  }

  const entity = user;
  if (!entity) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(password, entity.password);
  if (!passwordMatch) {
    return null;
  }

  return {
    id: entity.id,
    username: entity.username || null,
    email: entity.email,
    image: entity.image || null,
  };
};

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials): Promise<any> => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        return verifyCredentials(credentials.email, credentials.password);
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user = {
          ...session.user,
          id: token.id as string,
          username: token.username as string,
          email: token.email as string,
          image: token.image as string | null | undefined,
          permissions: token.permissions as Record<string, boolean>,
        };
      }
      return session;
    },
  },
  pages: { signIn: "/" },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

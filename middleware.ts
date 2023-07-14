import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  mathchers: ["/conversations/:path*", "/users/:path*"],
};

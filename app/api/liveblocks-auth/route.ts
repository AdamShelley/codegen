import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_sKMqBUb6vOl3IhTmXsU7ITlRNcOnNfA-6iaX20N5yBKXolTvKPoF77YkZw0uhHk6",
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();
  const document = await convex.query(api.documents.get, { id: room });

  if (document?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }
}

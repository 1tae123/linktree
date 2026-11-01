import { getClicksCollection } from "@/lib/mongodb";
import { profile } from "@/data/profile";

// POST /api/clicks/:id — 해당 링크의 클릭 수를 1 올립니다.
export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  // 등록된 링크만 집계 (아무 id로 데이터가 쌓이는 것 방지)
  if (!profile.links.some((link) => link.id === id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  const result = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: result?.count ?? 1 });
}

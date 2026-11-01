import { connection } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { profile } from "@/data/profile";

// GET /api/clicks — 링크별 클릭 수를 확인합니다.
export async function GET() {
  await connection(); // 항상 최신 값을 읽도록 요청 시점에 실행

  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));

  return Response.json(
    profile.links.map((link) => ({
      id: link.id,
      title: link.title,
      count: counts[link.id] ?? 0,
    })),
  );
}

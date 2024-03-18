import series from "@/src/fake_data/series";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: series, ok: true, code: 200 });
}

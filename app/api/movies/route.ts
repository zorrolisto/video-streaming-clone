import movies from "@/src/fake_data/movies";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: movies, ok: true, code: 200 });
}
export async function POST() {
  return NextResponse.json({ data: movies, ok: true, code: 200 });
}

import movies from "@/src/fake_data/movies";
import series from "@/src/fake_data/series";
import { EMediaType } from "@/src/shared/enums";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const mediaType = req.nextUrl.searchParams.get("mediaType");
  const arrayOfMedia = mediaType === EMediaType.MOVIE ? movies : series;

  return NextResponse.json({
    data: arrayOfMedia.find((r) => r.id === Number(id)),
    recomendations: arrayOfMedia
      .sort(() => Math.random() - Math.random())
      .slice(0, 3), // 3 random movies or series
    ok: true,
    code: 200,
  });
}

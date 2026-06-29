import { NextResponse } from "next/server";
import { inscriptionSchema } from "@/core/inscription/schema";
import { sendInscription } from "@/core/inscription/send-inscription";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = inscriptionSchema.safeParse(body);

  if (!parsed.success) {
    console.error("[inscription] validation error:", JSON.stringify(parsed.error.flatten()));
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendInscription(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inscription]", error);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}

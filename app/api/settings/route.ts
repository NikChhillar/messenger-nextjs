import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();

    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedUser = await prismadb.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        image: image,
        name: name,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("settings", error);
    return new NextResponse("Error", { status: 500 });
  }
}

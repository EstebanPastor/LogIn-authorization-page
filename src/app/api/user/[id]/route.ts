import { verifyJWT } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const accessToken = request.headers.get("Authorization");
  if (!accessToken || !verifyJWT(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const userPosts = await prisma.post.findMany({
    where: { authorId: +params.id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}

import { getProjects } from "@/lib/db";

export async function GET(request: Request): Promise<Response> {
  try {
    const projects = await getProjects();
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching projects" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

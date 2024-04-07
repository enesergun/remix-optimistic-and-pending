import type { ActionFunctionArgs } from "@remix-run/node";
import { json, type MetaFunction } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
import AddTodoForm from "~/components/form";
import TodoList from "~/components/list";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLIC_KEY!
);
export async function loader() {
  const { data: todos } = await supabase.from("todos").select("*");
  return todos;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  if (request.method === "DELETE") {
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", body.get("id"));
    if (error) {
      console.error("error", error);
      throw error;
    }
  } else {
    const { error } = await supabase
      .from("todos")
      .insert([{ text: body.get("text"), status: true }])
      .select();

    if (error) {
      console.error("error", error);
      throw error;
    }
  }
  return json({ message: true });
}
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

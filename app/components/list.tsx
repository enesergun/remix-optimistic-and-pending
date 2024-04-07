import { useFetcher, useLoaderData } from "@remix-run/react";

function ListItem({ item }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler(id) {
    fetcher.submit({ id: id }, { method: "delete", action: `/?index` });
  }
  const isDeleting = fetcher.state !== "idle";
  return (
    <li>
      <span>{item.text}</span>
      <button
        onClick={() => deleteExpenseItemHandler(item.id)}
        style={{
          marginLeft: "15px",
        }}
      >
        {isDeleting ? "deleting..." : "delete"}
      </button>
    </li>
  );
}

export default function TodoList() {
  const data = useLoaderData();
  return (
    <ul>
      {data?.map((item) => (
        <ListItem key={`data_${item.id}`} item={item} />
      ))}
    </ul>
  );
}

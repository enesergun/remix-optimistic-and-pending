import { useFetcher, useLoaderData, useNavigation } from "@remix-run/react";

function ListItem({ item }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler(id) {
    fetcher.submit({ id: id }, { method: "delete", action: `/?index` });
  }
  const isDeleting = fetcher.state !== "idle";

  return (
    <li hidden={isDeleting}>
      <span>{item.text}</span>
      <button
        onClick={() => deleteExpenseItemHandler(item.id)}
        style={{
          marginLeft: "15px",
        }}
      >
        delete
      </button>
    </li>
  );
}

export default function TodoList() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <ul>
      {data?.map((item) => (
        <ListItem key={`data_${item.id}`} item={item} />
      ))}
      {isSubmitting && (
        <ListItem item={{ text: navigation.formData?.get("text") }} />
      )}
    </ul>
  );
}

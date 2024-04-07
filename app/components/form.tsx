import { Form, useNavigation } from "@remix-run/react";
import { useRef, useEffect } from "react";

export default function AddTodoForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const formRef = useRef();

  useEffect(() => {
    if (isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  return (
    <Form replace ref={formRef} method="post">
      <input id="text" name="text" type="text" placeholder="write something " />
      <button id="submit-button" name="submit-button" type="submit">
        {isSubmitting ? "submitting" : "add"}
      </button>
    </Form>
  );
}

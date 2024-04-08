# Remix.run: Optimistic UI vs. Pending UI Comparison

## Understanding Optimistic UI and Pending UI
The project explores two approaches to handling user interactions that involve server communication:

- <b>Optimistic UI</b>: Assumes the action will succeed and updates the UI immediately, potentially reverting later if there's an error.
- <b>Pending UI</b>: Shows a visual cue (e.g., spinner) while waiting for the server response before updating the UI.

## Choosing the Right Approach

### Optimistic UI
- Be optimistic! Assume the action will succeed.
- When a user clicks a button, for example, update the UI right away to reflect the expected outcome (e.g., show the post as liked or the task added to the list).
- In the background, send a request to the server to confirm the action.
- If successful, great! The UI already reflects the change.
- If there's an error (e.g., network issue), revert the UI change and inform the user.

https://github.com/enesergun/remix-optimistic-and-pending/assets/63712936/1917172f-dd49-4ca7-b578-0f63bb170777

### Pending UI
- This is a more traditional approach.
- When a user performs an action, show a visual cue that something is happening (e.g., a spinner or dimmed button).
- This lets the user know the application is working on their request.
- Once the server responds, update the UI accordingly.


https://github.com/enesergun/remix-optimistic-and-pending/assets/63712936/d57995ad-3c56-46a2-8d0a-ff0b7031671b


  
### Choosing between them:
1. Use optimistic UI for common actions that are likely to succeed to make the app feel faster.
2. Use pending UI for actions that might fail or take longer, so users aren't confused by a sudden UI change.


## Development

Run the Vite dev server:

```shellscript
npm run dev
```

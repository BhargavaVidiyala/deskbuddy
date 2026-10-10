// Task logic, kept separate from the UI so it can be reused (e.g. on Android).
// A task looks like: { id, text, done }

export function addTask(tasks, text) {
  const trimmed = text.trim();
  if (!trimmed) return tasks;
  return [...tasks, { id: crypto.randomUUID(), text: trimmed, done: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}

export function deleteTask(tasks, id) {
  return tasks.filter((t) => t.id !== id);
}

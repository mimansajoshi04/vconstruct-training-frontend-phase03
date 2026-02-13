export default function Task({
  id,
  title,
  createdAt,
  updatedAt,
  isCompleted,
  editTask,
  deleteTask,
  markCompleted,
}) {
  return (
    <article
      id={id}
      style={{
        backgroundColor: isCompleted ? "green" : "yellow",
        color: "black",
      }}
    >
      <h3 id={`TSK-${id}`}>{title}</h3>
      <dl>
        <dt>
          <strong>Metadata</strong>
        </dt>
        <dd>
          <em>createdAt: {createdAt.toLocaleString()}</em>
        </dd>
        <dd>
          <em>updatedAt: {updatedAt.toLocaleString()}</em>
        </dd>
      </dl>

      <Button onClick={() => editTask(id)} backgroundColor="gray">
        Edit
      </Button>
      <Button onClick={() => deleteTask(id)} backgroundColor="red">
        Delete
      </Button>
      {!isCompleted && (
        <Button onClick={() => markCompleted(id)} backgroundColor="green">
          Mark Completed
        </Button>
      )}
    </article>
  );
}

export function Button({
  onClick,
  backgroundColor,
  type = "button",
  children,
}) {
  return (
    <button onClick={onClick} style={{ backgroundColor: backgroundColor }}>
      {children}
    </button>
  );
}

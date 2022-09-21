export const Todo = ({ id, title, state }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{state}</p>
    </article>
  );
};

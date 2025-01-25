export default async function Home() {
  const res = await fetch("http://localhost:3001");
  const { message } = (await res.json()) as { message: string };

  return <div>{message}</div>;
}

export default async function Home() {
  const res = await fetch(
    "https://zzrnpsf9lj.execute-api.ap-northeast-1.amazonaws.com/prod/"
  );
  const { message } = (await res.json()) as { message: string };

  return <div>{message}</div>;
}

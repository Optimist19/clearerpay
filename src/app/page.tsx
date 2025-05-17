import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard")
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <h1>Welcome to Clearerpay!!!</h1>
    </div>
  );
}
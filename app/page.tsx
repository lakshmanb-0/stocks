import Discussion from "./components/Discussion";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <Discussion />
    </main>
  );
}

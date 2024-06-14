import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import Info from "./components/Info";
import CheckList from "./components/CheckList";
import GuestList from "./components/GeustList";
import Budget from "./components/Budjet";

export default function Home() {
  return (
    <main>
      <Navbar>
        <h1 className="font-semibold text-xl">Vivid Vows</h1>
        <p className="text-sm text-slate-500">Party / Event planner</p>
      </Navbar>

      <div className="flex">
        <div className="w-3/4">
          <div className="container p-4 mx-auto">
            <Info />
            <CheckList />
            <GuestList/>
            <Budget/>
          </div>
        </div>
        <div className="w-1/4">
          <RightSidebar>
            <RightSidebar.List>
              <RightSidebar.Item>Planning Check List</RightSidebar.Item>
              <RightSidebar.Item>Guest List</RightSidebar.Item>
              <RightSidebar.Item>Buget</RightSidebar.Item>
            </RightSidebar.List>
          </RightSidebar>
        </div>
      </div>
    </main>
  );
}

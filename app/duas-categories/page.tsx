"use client";
import { RightPanel } from "@/components/RightPanel/page";
import { SideNavbar } from "@/components/SideNavbar/page";
import CategoryPage from "../Category/categoryPage";
import Duas from "../Category/duas-importance/page";
import DuasNavbarPage from "@/components/DuasNavbar/DuasNavbarPage";

export default function DuasPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SideNavbar />
      <div className="pt-[12vh] pl-18">
        <DuasNavbarPage />
      </div>

      <div className="flex">
        <div className="w-80">
          <CategoryPage />
        </div>

        <div className="flex-1 bg-black">
          <Duas />
        </div>

        <aside className="w-80 border border-gray-800">
          <RightPanel />
        </aside>
      </div>
    </div>
  );
}

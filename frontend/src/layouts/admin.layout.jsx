import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />

      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

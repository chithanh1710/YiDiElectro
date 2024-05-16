import { Navigate } from "react-router-dom";

export default function DashBoard() {
  const isAdminLogin = sessionStorage.getItem("adminLogin") === "true";
  console.log("render");
  if (!isAdminLogin) {
    return <Navigate to="/admin/login" replace />;
  } else {
    return (
      <div className="w-full h-screen bg-black">
        <iframe height="100%" width="100%" src="../../pageAdmin.html" />
      </div>
    );
  }
}

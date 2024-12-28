import { CRow, CCol } from "@coreui/react";
// import "@/app/styles/default/default.css";
import SidebarLeft from "@/app/dashboardComponents/Sidebar/Sidebar.js";
import "@/app/styles/dashboard/HomeDashboard/HomeDashboard.css";

export const metadata = {
  title: "Settings - Distrosub",
};

export default function PayoutLayout({ children }) {
  return (
    <CRow className="gx-2 gx-lg-4">
      <CCol lg={3}>
        <div className="sidebar-wrapper sticky-sidebar dashboard-sidebar">
          <SidebarLeft></SidebarLeft>
        </div>
      </CCol>
      <CCol lg={9} className="order-3 order-lg-2">
        {children}
      </CCol>
    </CRow>
  );
}

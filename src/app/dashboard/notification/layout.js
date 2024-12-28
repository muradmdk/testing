import { CRow, CCol } from "@coreui/react";
// import "@/app/styles/default/default.css";
import SidebarLeft from "@/app/dashboardComponents/Sidebar/notificationsSidebar.js";
import "@/app/styles/dashboard/HomeDashboard/HomeDashboard.css";

export const metadata = {
  title: "Notification - Distrosub",
};

export default function NotificationLayout({ children }) {
  return (
    <CRow className="gx-2 gx-lg-4">
      <CCol lg={3}>
        <div className="sidebar-wrapper sticky-sidebar dashboard-sidebar">
          <SidebarLeft></SidebarLeft>
        </div>
      </CCol>
      <CCol lg={9} className="order-3 order-lg-2 mt-lg-0 mt-3">
        {children}
      </CCol>
    </CRow>
  );
}

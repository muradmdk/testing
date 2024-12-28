import { CRow, CCol } from "@coreui/react";
// import "@/app/styles/default/default.css";
import SidebarLeft from "@/app/dashboardComponents/Sidebar/analyticsSidebar.js";
import "@/app/styles/dashboard/HomeDashboard/HomeDashboard.css";

export const metadata = {
  title: "Analytics - Distrosub",
};

export default function AnalyticsLayout({ children }) {
  return (
    <CRow className="gx-2 gx-lg-4">
      <CCol lg={3}>
        <div className="sidebar-wrapper sticky-sidebar dashboard-sidebar">
          <SidebarLeft></SidebarLeft>
        </div>
      </CCol>
      <CCol lg={9} className="mt-3 mt-lg-0">
        {children}
      </CCol>
    </CRow>
  );
}

import "./Admin.css";
import Sidebar from "./components/Sidebar";
import Meetings from "./components/Meetings";
import Customers from "./components/Customers";
import CustomerProfile from "./components/CustomerProfile";
import NotesEditor from "./components/NotesEditor";

import { useState } from "react";

export default function Admin() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="admin-page">
      <Sidebar />

      <div className={`admin-main ${selectedCustomer ? "focused" : ""}`}>
        <div className="admin-sections">

          <div className="admin-col meetings-col">
            <Meetings />
          </div>

          <div className="admin-col customers-col">
            <Customers onSelect={setSelectedCustomer} />
          </div>

          {selectedCustomer && (
            <div className="admin-col profile-col">
              <CustomerProfile customer={selectedCustomer}>
                <NotesEditor customer={selectedCustomer} />
              </CustomerProfile>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

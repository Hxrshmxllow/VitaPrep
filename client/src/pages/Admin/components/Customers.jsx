import "./Customers.css";
import { Search, Mail, UserRound } from "lucide-react";

export default function Customers({ onSelect }) {

  const customers = [
    { id: 1, name: "John Doe", email: "john@uni.edu", tag: "Active" },
    { id: 2, name: "Emily Carter", email: "emily@college.edu", tag: "Essay" },
    { id: 3, name: "Michael Singh", email: "msingh@edu.com", tag: "Strategy" },
  ];

  return (
    <div className="customers-card">

      {/* Title */}
      <h3 className="customers-title">Customers</h3>

      {/* Search Bar */}
      <div className="customers-search">
        <Search size={18} />
        <input placeholder="Search students..." />
      </div>

      {/* Customer List */}
      <div className="customers-list">
        {customers.map((c) => (
          <div 
            key={c.id} 
            className="customer-row"
            onClick={() => onSelect(c)}
          >
            
            <div className="customer-left">
              <div className="customer-avatar">
                <UserRound size={20} />
              </div>

              <div className="customer-info">
                <span className="customer-name">{c.name}</span>
                <span className="customer-email">{c.email}</span>
              </div>
            </div>

            <div className="customer-right">
              <span className="customer-tag">{c.tag}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

import "./CustomerProfile.css";
import { UserRound, Mail, Calendar, Tag } from "lucide-react";

export default function CustomerProfile({ customer, children }) {
  return (
    <div className="profile-card">

      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <UserRound size={34} />
        </div>

        <div>
          <h3 className="profile-name">{customer.name}</h3>
          <div className="profile-email">
            <Mail size={16} />
            {customer.email}
          </div>
        </div>
      </div>

      {/* Chips / Labels */}
      <div className="profile-chips">
        <span className="chip">
          <Calendar size={15} />
          3 Meetings
        </span>

        <span className="chip">
          <Tag size={15} />
          {customer.tag}
        </span>
      </div>

      {/* Divider */}
      <div className="profile-divider"></div>

      {/* Content */}
      <div className="profile-section">
        {children}
      </div>

    </div>
  );
}

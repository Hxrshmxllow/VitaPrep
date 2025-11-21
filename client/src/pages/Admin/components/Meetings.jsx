import "./Meetings.css";
import { CalendarDays, Video, User } from "lucide-react";

export default function Meetings() {
  const meetings = [
    {
      day: "Monday",
      items: [
        { time: "3:00 PM", name: "John Doe", type: "Intro Call" },
      ],
    },
    {
      day: "Tuesday",
      items: [
        { time: "12:00 PM", name: "Emily Carter", type: "Essay Review" },
      ],
    },
    {
      day: "Thursday",
      items: [
        { time: "5:00 PM", name: "Michael Singh", type: "Strategy Session" },
      ],
    },
  ];

  return (
    <div className="meetings-card">
      <div className="meetings-header">
        <CalendarDays size={22} />
        <h3>Upcoming Meetings</h3>
      </div>

      <div className="timeline-container">
        {meetings.map((day, i) => (
          <div key={i} className="timeline-day">
            <h4 className="timeline-day-title">{day.day}</h4>

            {day.items.map((m, j) => (
              <div key={j} className="timeline-item">
                
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>

                <div className="timeline-content">
                  <div className="meeting-info">
                    <div className="meeting-icon">
                      <Video size={18} />
                    </div>

                    <div>
                      <h5 className="meeting-name">{m.name}</h5>
                      <span className="meeting-type">{m.type}</span>
                    </div>
                  </div>

                  <div className="meeting-time">{m.time}</div>
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

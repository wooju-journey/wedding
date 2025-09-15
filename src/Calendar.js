import React from 'react';
import './Calendar.css';

function Calendar() {
  // November 2025
  const year = 2025;
  const month = 10; // 0-indexed for Date object (November)
  const weddingDay = 2;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  // Create empty divs for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="day empty"></div>);
  }

  // Create divs for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isWeddingDay = day === weddingDay;
    calendarDays.push(
      <div key={day} className={`day ${isWeddingDay ? 'wedding-day' : ''}`}>
        {day}
        {isWeddingDay && <span className="heart">❤️</span>}
      </div>
    );
  }

  return (
    <div className="my-5 text-center">
      <div className="calendar">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>11</span>
            <span className="ms-2" style={{fontSize: '1.2rem'}}>November</span>
          </div>
          <div style={{fontSize: '1.2rem'}}>
            SUN. pm 3:30
          </div>
        </div>
        <div className="days-header">
          <div className="day-name">일</div>
          <div className="day-name">월</div>
          <div className="day-name">화</div>
          <div className="day-name">수</div>
          <div className="day-name">목</div>
          <div className="day-name">금</div>
          <div className="day-name">토</div>
        </div>
        <div className="days-grid">
          {calendarDays}
        </div>
      </div>
    </div>
  );
}

export default Calendar;

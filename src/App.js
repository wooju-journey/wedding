import React, { useEffect } from 'react';
import Introduction from './Introduction';
import Invitation from './Invitation';
import Gallery from './Gallery';
import Calendar from './Calendar';
import Location from './Location';
import Contact from './Contact';
import Gift from './Gift';
// import Guestbook from './Guestbook';
import Share from './Share';

function App() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      // Kakao.init을 한 번만 실행(isInitialized로 확인)
      window.Kakao.init('YOUR_JAVASCRIPT_KEY'); // 여기에 본인의 JavaScript 키를 입력하세요.
    }
  }, []);

  return (
    <div className="container py-5">
      <Introduction />
      <Invitation />
      <Contact />
      <Calendar />
      <Gallery />
      <Location />
      <Gift />
      {/* <Guestbook /> */}
      <Share />
    </div>
  );
}

export default App;

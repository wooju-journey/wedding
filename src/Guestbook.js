import React, { useState } from 'react';

function Guestbook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      alert(`소중한 메시지 감사합니다, ${name}님!`);
      setName('');
      setMessage('');
    } else {
      alert('이름과 메시지를 모두 입력해주세요.');
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-center mb-4">방명록</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="guestName" className="form-label">이름</label>
              <input 
                type="text" 
                className="form-control" 
                id="guestName" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="guestMessage" className="form-label">메시지</label>
              <textarea 
                className="form-control" 
                id="guestMessage" 
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="축하 메시지를 남겨주세요"
              ></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">메시지 남기기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Guestbook;

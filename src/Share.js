import React from 'react';

function Share() {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다.");
  };

  const shareOnKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'location',
        address: '서울 구로구 경인로 624',
        addressTitle: '라마다서울신도림호텔웨딩',
        content: {
          title: '우리의 결혼식에 초대합니다',
          description: '라마다서울신도림호텔웨딩',
          imageUrl: 'main.jpg', // you can change this to your main image
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="d-flex mt-4 align-items-center" style={{backgroundColor: '#666', color: 'white', borderRadius: '5px', overflow: 'hidden'}}>
      <button onClick={copyLink} className="btn text-white flex-fill" style={{borderRadius: 0, background: 'none'}}>
        <i className="bi bi-link-45deg"></i> 링크 복사
      </button>
      <div style={{borderLeft: '2px solid #888', height: '20px'}}></div>
      <button onClick={shareOnKakao} className="btn text-white flex-fill" style={{borderRadius: 0, background: 'none'}}>
        <i className="bi bi-chat-dots-fill"></i> 카카오 공유
      </button>
    </div>
  );
}

export default Share;
import React from 'react';

function Share() {
  const weddingUrl = 'https://wooju-journey.github.io/wedding/251102/';
  const imageUrl = 'https://wooju-journey.github.io/wedding/251102/main.jpg';

  const copyLink = () => {
    navigator.clipboard.writeText(weddingUrl);
    alert("링크가 복사되었습니다.");
  };

  const shareOnKakao = () => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        alert("카카오 SDK가 초기화되지 않았습니다. 카카오 자바스크립트 키를 확인해주세요.");
        return;
      }
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '우리의 결혼식에 초대합니다',
          description: '라마다서울신도림호텔웨딩',
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: weddingUrl,
            webUrl: weddingUrl,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: weddingUrl,
              webUrl: weddingUrl,
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

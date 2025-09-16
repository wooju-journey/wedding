import React, { useEffect, useRef } from 'react';

function Location() {
  // 여기에 네이버 지도 클라이언트 ID를 입력하세요.
  // 클라이언트 시크릿은 프론트엔드에서 필요하지 않습니다.
  const NAVER_MAP_CLIENT_ID = "4xafrz9koc";
  // const NAVER_MAP_CLIENT_ID = null;


  const locationName = "라마다서울신도림호텔웨딩";
  const address = "서울 구로구 경인로 624";
  const phone = "02-2162-2100";
  const lat = 37.50623681901727;
  const lng = 126.8853967740226;

  const mapElement = useRef(null);

  useEffect(() => {

    const scriptId = 'naver-maps-script';

    const loadMap = () => {
      if (mapElement.current && window.naver) {
        const { naver } = window;
        const location = new naver.maps.LatLng(lat, lng);
        const mapOptions = {
          center: location,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
          },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
          position: location,
          map: map,
        });
      }
    };

    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`;
      script.async = true;
      script.onload = () => {
        script.setAttribute('data-loaded', 'true');
        loadMap();
      };
      script.onerror = () => {
        console.error("Naver Maps 스크립트 로딩에 실패했습니다. Client ID가 유효한지, Naver Cloud Platform에서 Web 서비스 URL 등록('http://localhost:3000' 등)이 올바르게 되었는지 확인해주세요.");
        if (mapElement.current) {
          mapElement.current.innerHTML = '<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background-color: #f0f0f0; border: 1px solid #ccc;">지도 로딩 실패. Client ID 또는 도메인 설정을 확인해주세요.</div>';
        }
      };
      document.head.appendChild(script);
    } else if (script.getAttribute('data-loaded')) {
      loadMap();
    } else {
      script.addEventListener('load', loadMap);
    }

  }, [lat, lng]);

  return (
    <div className="my-5 text-center">
      <h2 className="mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>오시는 길</h2>
      <p>
        {locationName}
        <br />
        {address}
        <br />
        {phone.replace(/-/g, '.')}
      </p>
      <div 
        ref={mapElement}
        style={{
          width: '100%', 
          height: '300px',
          margin: '1rem 0'
        }}
      />
      <div className="d-flex justify-content-center align-items-center mt-3">
        <a href={`tmap://?rGoName=${locationName}&rGoX=${lng}&rGoY=${lat}`} className="text-center text-decoration-none mx-2">
          <img src={`${process.env.PUBLIC_URL}/icon/tmap.jpg`} alt="T-map" style={{width: '40px', height: '40px', borderRadius: '5px'}} />
          <p className="mt-1 mb-0" style={{fontSize: '0.8rem', color: '#666'}}>티맵</p>
        </a>
        <a href={`kakaonavi://route?name=${locationName}&x=${lng}&y=${lat}`} className="text-center text-decoration-none mx-2">
          <img src={`${process.env.PUBLIC_URL}/icon/kakao.png`} alt="Kakao Navi" style={{width: '40px', height: '40px', borderRadius: '5px'}} />
          <p className="mt-1 mb-0" style={{fontSize: '0.8rem', color: '#666'}}>카카오내비</p>
        </a>
        <a href={`nmap://navigation?dlat=${lat}&dlng=${lng}&dname=${locationName}`} className="text-center text-decoration-none mx-2">
          <img src={`${process.env.PUBLIC_URL}/icon/naver.jpg`} alt="Naver Map" style={{width: '40px', height: '40px', borderRadius: '5px'}} />
          <p className="mt-1 mb-0" style={{fontSize: '0.8rem', color: '#666'}}>네이버지도</p>
        </a>
      </div>
      <div style={{ textAlign: 'left', marginTop: '2rem' }}>
        <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '5px' }}>주차 안내</p>
        <p style={{ fontSize: '12px', margin: 0 }}>건물 내 지하 주차장 및 주차타워 이용 가능</p>
        <p style={{ fontSize: '12px', margin: 0 }}>* 무료 주차는 1시간 30분 가능합니다.</p>
        <br />
        <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '5px' }}>지하철</p>
        <p style={{ fontSize: '12px', margin: 0 }}>신도림역 1호선, 2호선 1번 출구 (신도림 광장 도보 5분)</p>
        <br />
        <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '5px' }}>버스</p>
        <p style={{ fontSize: '12px', margin: 0 }}>버스 (신도림역/구로역)</p>
        <p style={{ fontSize: '12px', margin: 0 }}>간선버스 : 160, 503, 600, 660, 662, N16(심야)</p>
        <p style={{ fontSize: '12px', margin: 0 }}>지선버스 : 6513, 6515, 6516, 6637, 6640B</p>
        <br />
        <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '5px' }}>셔틀 버스</p>
        <p style={{ fontSize: '12px', margin: 0 }}>신도림역 1번 출구 앞</p>
      </div>
    </div>
  );
}

export default Location;

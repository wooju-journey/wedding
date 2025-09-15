
import React from 'react';

function Invitation() {
  const groomName = "임우찬";
  const brideName = "방주영";

  const groomFirstName = "우찬";
  const brideFirstName = "주영";

  const weddingDate = "2025.11.02 SUN PM 3:30";
  const weddingLocation = "라마다 신도림 서울 그랜드 볼룸";

  const groomParents = {
    father: "임동문",
    mother: "박현순",
  };
  const brideParents = {
    father: "방영환",
    mother: "김승순",
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">

          <div style={{margin: "3rem 0"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem"}}>
              <span style={{fontSize: "1.6rem", fontWeight: "bold"}}>{groomName}</span>
              <span style={{margin: "0 1.5rem", fontSize: "1.2rem"}}>&</span>
              <span style={{fontSize: "1.6rem", fontWeight: "bold"}}>{brideName}</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="my-4">
            <p style={{fontSize: "1.2rem", marginBottom: "1rem", fontWeight: 500}}>
              {weddingDate}
            </p>
            <p style={{fontSize: "1.1rem"}}>
              {weddingLocation}
            </p>
          </div>

          <hr className="my-4" />

          <p style={{fontSize: "15px", margin: "3rem 0", lineHeight: "1.8"}}>
            서로의 가장 좋은 벗이 되겠습니다.<br/>
            사랑으로 가득 채워<br/>
            함께하는 모든 날들을 만들어 가겠습니다.<br/>
            저희 두 사람의 시작을<br/>
            가까이에서 축복해주시면<br/>
            더없는 기쁨으로 간직하겠습니다.
          </p>

          <div style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
            <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{groomParents.father}</span> · <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{groomParents.mother}</span>
            <span style={{fontSize: '0.9rem'}}> 의 아들 </span>
            <span style={{fontWeight: "bold"}}>{groomFirstName}</span>
            <br />
            <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{brideParents.father}</span> · <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>{brideParents.mother}</span>
            <span style={{fontSize: '0.9rem'}}> 의 딸 </span>
            <span style={{fontWeight: "bold"}}>{brideFirstName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitation;

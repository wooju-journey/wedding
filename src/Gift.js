import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Gift() {
  const copyToClipboard = (fullAccountString) => {
    const accountNumber = fullAccountString.split(' ').pop();
    navigator.clipboard.writeText(accountNumber);
    alert("계좌번호가 복사되었습니다.");
  };

  const groom = { name: "임우찬", account: "국민은행 171302-04-117983" };
  const groomFather = { name: "임동문", account: "국민은행 621902-97-100950" };
  const groomMother = { name: "박현순", account: "국민은행 94333567266" };

  const bride = { name: "방주영", account: "SC은행 225-20-060253" };
  const brideFather = { name: "방영환", account: "SC은행 780-20-218312" };
  const brideMother = { name: "김승순", account: "SC은행 791-20-253508" };

  return (
    <div className="my-5">
      <h2 className="text-center mb-4">마음 전하실 곳</h2>
      {/* <div className="text-center">
        <p className="mb-2">
          멀리서도 축하의 마음을
          <br />
          전하고 싶으신 분들을 위해
          <br />
          계좌번호를 안내드립니다.
        </p>
        <p className="mb-4">
          소중한 축하를 보내주셔서 감사드리며,
          <br />
          따뜻한 마음에 깊이 감사드립니다.
        </p>
      </div> */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="groom-header">신랑측</Accordion.Header>
          <Accordion.Body className="">
            <h5 style={{fontSize: '1rem'}}>신랑 {groom.name}</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 me-2">{groom.account}</p>
              <button className="btn btn-sm groom-btn" onClick={() => copyToClipboard(groom.account)}>
                복사
              </button>
            </div>
            <hr />
            <h5 style={{fontSize: '1rem'}}>아버지 {groomFather.name}</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 me-2">{groomFather.account}</p>
              <button className="btn btn-sm groom-btn" onClick={() => copyToClipboard(groomFather.account)}>
                복사
              </button>
            </div>
            <hr />
            <h5 style={{fontSize: '1rem'}}>어머니 {groomMother.name}</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 me-2">{groomMother.account}</p>
              <button className="btn btn-sm groom-btn" onClick={() => copyToClipboard(groomMother.account)}>
                복사
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="bride-header">신부측</Accordion.Header>
          <Accordion.Body className="">
            <h5 style={{fontSize: '1rem'}}>신부 {bride.name}</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 me-2">{bride.account}</p>
              <button className="btn btn-sm bride-btn" onClick={() => copyToClipboard(bride.account)}>
                복사
              </button>
            </div>
            <hr />
            <h5 style={{fontSize: '1rem'}}>아버지 {brideFather.name}</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 me-2">{brideFather.account}</p>
              <button className="btn btn-sm bride-btn" onClick={() => copyToClipboard(brideFather.account)}>
                복사
              </button>
            </div>
            <hr />
            <h5 style={{fontSize: '1rem'}}>어머니 {brideMother.name}</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 me-2">{brideMother.account}</p>
              <button className="btn btn-sm bride-btn" onClick={() => copyToClipboard(brideMother.account)}>
                복사
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Gift;
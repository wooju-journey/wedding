import React from 'react';

function Contact() {
  const contacts = {
    groom: {
      name: "임우찬",
      phone: "010-5024-5107",
    },
    bride: {
      name: "방주영",
      phone: "010-4168-6781",
    },
    groomParents: {
      father: {
        name: "임동문",
        phone: "010-4241-5117",
      },
      mother: {
        name: "박현순",
        phone: "010-4333-5672",
      },
    },
    brideParents: {
      father: {
        name: "방영환",
        phone: "010-4550-6781",
      },
      mother: {
        name: "김승순",
        phone: "010-4556-6781",
      },
    },
  };

  const ContactItem = ({ name, relationship, phone, color, showName = true }) => (
    <div className="text-center mb-3">
      {showName && (
        <p className="mb-1">
          <span className="me-1" style={{fontSize: '12px'}}>{relationship}</span>
          <span style={{fontSize: '16px', fontWeight: 'bold'}}>{name}</span>
        </p>
      )}
      {!showName && (
        <p className="mb-1">
          <span style={{fontSize: '18px', fontWeight: 'bold'}}>{relationship}</span>
        </p>
      )}
      <div>
        <a href={`tel:${phone}`} className="btn btn-outline-secondary border-0 no-hover-bg">
          <i className="bi bi-telephone-fill" style={{ color }}></i>
        </a>
        <a href={`sms:${phone}`} className="btn btn-outline-secondary border-0 ms-2 no-hover-bg">
          <i className="bi bi-chat-dots-fill" style={{ color }}></i>
        </a>
      </div>
    </div>
  );

  return (
    <div className="my-5" style={{ backgroundColor: '#f9f9fb', padding: '2rem 0' }}>
      <div className="row">
        <div className="col-6">
          <ContactItem relationship="신랑" phone={contacts.groom.phone} color="#5F8B9B" showName={false} />
          <hr />
          <h5 className="text-center mb-3" style={{fontSize: '15px'}}>신랑 측 혼주</h5>
          <ContactItem relationship="아버지" name={contacts.groomParents.father.name} phone={contacts.groomParents.father.phone} color="#5F8B9B" />
          <ContactItem relationship="어머니" name={contacts.groomParents.mother.name} phone={contacts.groomParents.mother.phone} color="#5F8B9B" />
        </div>
        <div className="col-6">
          <ContactItem relationship="신부" phone={contacts.bride.phone} color="#BB7273" showName={false} />
          <hr />
          <h5 className="text-center mb-3" style={{fontSize: '15px'}}>신부 측 혼주</h5>
          <ContactItem relationship="아버지" name={contacts.brideParents.father.name} phone={contacts.brideParents.father.phone} color="#BB7273" />
          <ContactItem relationship="어머니" name={contacts.brideParents.mother.name} phone={contacts.brideParents.mother.phone} color="#BB7273" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

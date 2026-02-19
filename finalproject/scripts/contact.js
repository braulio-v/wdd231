const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
  <p>First Name: ${myInfo.get('first')}</p> 
  <p>Last Name: ${myInfo.get('last')}</p>
  <p>Email: ${myInfo.get('email')}</p>
  <p>Phone: ${myInfo.get('phone') || 'Not provided'}</p>
  <p>English Level: ${myInfo.get('level')}</p>
  <p>Membership Level: ${myInfo.get('membership')}</p>
  <p>Subscribed to Updates: ${myInfo.get('updates') ? 'Yes' : 'No'}</p>
`;

const timestamp = myInfo.get("timestamp");
const date = new Date(Number(timestamp));
document.querySelector('#join-timestamp').innerHTML = `<br>
  Timestamp: ${date}`;



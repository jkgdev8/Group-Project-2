var storage = localStorage.getItem('email');
// console.log(storage)
async function newFormHandler(event) {
    event.preventDefault();
    const email = storage;
    const subscription = document.querySelector('input[name="subscription"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const date = document.querySelector('input[name="date"]').value;
    
    const response = await fetch('/api/profile', {
      method: 'POST',
      body: JSON.stringify({
        subscription,
        price,
        date,
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      getFormHandler();
      // const data = response.json();
      // console.log(data);
    } else {
      alert(response.statusText);
    }
}

// function senddata(){
  async function getFormHandler(){

    const email = storage;

    const response = await fetch('/api/profile/form', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // if (response.ok) {
      const data = response.json();
      console.log(data);
    // } else {
      // alert(response.statusText);
    // }
  }

  // const htmlText = document.querySelector(".title");
  // htmlText.textContent = storage;
  // console.log(storage)
  // return document.location.replace('/dashboard');
// }
document.querySelector('.new-profile-form').addEventListener('submit', newFormHandler);
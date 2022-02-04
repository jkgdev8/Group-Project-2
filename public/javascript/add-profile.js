async function newFormHandler(event) {
    event.preventDefault();
  
    const subscription = document.querySelector('input[name="subscription"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const date = document.querySelector('input[name="date"]').value;
    
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({
        subscription,
        price,
        date
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/dashboard');
=======
      document.location.replace('/');
      // console.log(subscription);
      // console.log(price);
      // console.log(date);
>>>>>>> 2bb3694ffc546f19dfb2dc18d7e14b1ba3019220
    } else {
      alert(response.statusText);
    }
    
  }
  
  document.querySelector('.new-profile-form').addEventListener('submit', newFormHandler);
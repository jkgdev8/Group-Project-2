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
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-profile-form').addEventListener('submit', newFormHandler);
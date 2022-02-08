var btn = document.querySelector('#btn');

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
      return res.json();
      
      
    } else {
      alert(response.statusText);
    }
    
}

var clickMe = function() {
    
    
  fetch(response).then(async res=>{
      const data = await res.json();
      
  
          for (var i = 0; i <= 15; i++) {  
              var date =  document.createElement("ul");
              date.setAttribute = 
              date.textContent = "Date:   " + data.matches[i].date + " " + data.matches[i].team1 + " vs " 
              + data.matches[i].team2 + " Score: " + "  "  + data.matches[i].score.ft;
              scores.appendChild(date);
          }

     
      })

  
}



 
document.querySelector('.new-profile-form').addEventListener('submit', newFormHandler);
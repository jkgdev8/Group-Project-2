async function loaddata() {
    const response = await fetch('api/profile/' )
    const names = await response.json()
    
    
    console.log(names); 
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
loaddata();
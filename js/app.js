// loading data from the api 
const loadData = ()=>{
    const input = document.getElementById('input-field')
    const inputValue = input.value
    // console.log(inputValue);
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data))
    input.value = ''
}

// display data 

const displayData = (phones) =>{
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML =''
    phones.forEach(phone=> {
        
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
                <div class="card p-3" >
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">${phone.brand}</p>
                    </div>
                    <button id="details-button" class="btn btn-outline-success">See Details</button>
                </div>
        `
        cardContainer.appendChild(div)
        console.log(phone)
        
    })
    
}




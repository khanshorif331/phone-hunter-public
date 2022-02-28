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
    // console.log(phones.length) 
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
                    <button onclick="getDetails('${phone.slug}')" id="details-button" class="btn btn-outline-success">See Details</button>
                </div>
        `
// console.log(phone.slug);    
        cardContainer.appendChild(div)        
    })   
}


// again loading data from api for details button

const getDetails = phoneId =>{
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayDetails(data.data))
    // console.log(data);
    // console.log(phoneId)
}

// showing details data on the ui

const displayDetails = item =>{
    const detailsSection = document.getElementById('details')
    // const getSensors =()=>{
        // const sensors = 
        // console.log(...sensors);
        
        
        // const sensorData =[] 
        // for(const sensor of sensors){
        // // console.log(sensor);
        //     sensorData.push(sensor)
        // }
        // console.log(...sensorData);
    // }
    
    // const result = getSensors()
    // console.log(result);
    console.log(item.others);
    console.log(item.others.Bluetooth);
    
    
    //    <div class="card mb-3"></div>
    // </div>
    
    // const div = document.createElement('div')
    detailsSection.innerHTML = `
        
            <div class="row">
                <div class="col-md-6">
                <img src="${item.image}" class="card-img-top img-fluid" alt="...">
                </div>
                <div class="col-md-6">
                    <h5 class="card-title">${item.name}</h5>
                    <h2>Main Features</h2>
                    <p class="card-text">Chipset: ${item.mainFeatures.chipSet}</p>
                    <p class="card-text">Display-Size: ${item.mainFeatures.displaySize}</p>
                    <p class="card-text">Memory: ${item.mainFeatures.memory}</p>
                    <p class="card-text">Storage: ${item.mainFeatures.storage}</p>
                    <p class="card-text">Sensors: ${item.mainFeatures.sensors}</p>
                    <h4>Others</h4>
                    <p class="card-text">Bluetooth: ${item.others.Bluetooth}</p>
                    <p class="card-text">GPS: ${item.others.GPS}</p>
                    <p class="card-text">NFC: ${item.others.NFC}</p>
                    <p class="card-text">Radio: ${item.others.Radio}</p>
                    <p class="card-text">USB: ${item.others.USB}</p>
                    <p class="card-text">WLAN: ${item.others.WLAN}</p>
        
                </div>  
           
               
    `
    // console.log(item.mainFeatures.sensors);
}




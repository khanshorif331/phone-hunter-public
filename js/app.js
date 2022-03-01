// loading data from the api 
const loadData = ()=>{
    const input = document.getElementById('input-field')
    const inputValue = input.value
    // console.log(inputValue);
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data.slice(0,20)))
    input.value = ''
}

// display data 

const displayData = (phones) =>{
    // console.log(phones.length);
    // error message
    if(phones.length == 0){
        document.getElementById('error-text').style.display='block'
    }
    else{
        document.getElementById('error-text').style.display='none'
    }
    // hiding details section on every search
    const detailsSection = document.getElementById('details')
    detailsSection.innerHTML = '' 
    
    // setting innerhtml of card container
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
    const otherInfo = item.others
    const releaseInfo = item.releaseDate
    
    detailsSection.innerHTML = `       
            <div class="row">
                <div class="col-md-6">
                    <img src="${item.image}" class="card-img-top img-fluid" alt="...">
                    <h1 id="release-date" class="text-center">${item.releaseDate}</h1>
                </div>
                <div id="container" class="col-md-6 text-center border">
                    <div class="py-5 ">
                        <h5 class="card-title">${item.name}</h5>
                        <h2>Main Features</h2>
                        <p class="card-text">Chipset: ${item.mainFeatures.chipSet}</p>
                        <p class="card-text">Display-Size: ${item.mainFeatures.displaySize}</p>
                        <p class="card-text">Memory: ${item.mainFeatures.memory}</p>
                        <p class="card-text">Storage: ${item.mainFeatures.storage}</p>
                        <p class="card-text text-break">Sensors: ${item.mainFeatures.sensors}</p>
                    
                    <div id="ul">
                        <h4>Others</h4>
                        <p>Bluetooth: ${item?.others?.Bluetooth}</p>
                        <p>GPS: ${item?.others?.GPS}</p>
                        <p>NFC: ${item?.others?.NFC}</p>
                        <p>Radio: ${item?.others?.Radio}</p>
                        <p>USB: ${item?.others?.USB}</p>
                        <p>WLAN: ${item?.others?.WLAN}</p>
                    </div>
                    </div>                            
                </div>               
            `
    if(otherInfo == undefined){
        const ul = document.getElementById('ul')
        ul.innerHTML =''
        console.log(ul);
    }
    if(releaseInfo == ''){
        const releaseText = document.getElementById('release-date')
        releaseText.innerText = 'No realese date found.!!'
    }



    // console.log(item.others);
    // console.log(item.mainFeatures.sensors);
}




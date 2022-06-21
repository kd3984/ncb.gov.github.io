const apiURL = "https://jsonplaceholder.typicode.com/"

function remove(el) {
  el.remove();
  confirm('Are you sure you want to delete user?');
}

function resultUpdate () {
  document.getElementById("result-count").innerHTML=userPool.childElementCount;
}

fetch(apiURL + "users").then((data)=>{
    return data.json();
}).then((completedata) => {
    let users="";
    completedata.map((values)=>{
        users += `
        <div class="card user-card animate fade slide delay-${values.id}" id="userCard${values.id}">
                <div class="card-body user-body s-shadow">
                
                <div class="user-int l-shortened id-block s-id">
                <p class="user-data user-id"> ${values.id}</p>
                </div>

                <div class="user-int r-shortened id-block s-name">
                <h5 class="card-title user-data user-name u-name"> ${values.name}</h5>
                <p class="user-data user-username u-uname"> ${values.username}</p>
                </div>
                
                <div class="user-int l-shortened ad-block"<div>
                <i class="fa-solid fa-house-chimney user-ico"></i>
                </div>
                
                <div class="user-int r-shortened ad-block">
                <p class="user-data user-ad"> ${values.address.street}
                <p class="user-data user-ad2">
                ${values.address.city}
                <br>
                ${values.address.zipcode}
                </p>
                </div>
                
                <div class="user-int l-shortened co-block"<div>
                <i class="fa-solid fa-building user-ico"></i>
                </div>

                <div class="user-int r-shortened co-block">
                <p class="user-data user-coname">
                ${values.company.name}
                <p class="user-data user-coslogan">
                ${values.company.catchPhrase}
                <p class="user-data user-cojoke">
                ${values.company.bs}
                </p>

                </div>

                <div class="user-int cont-block email">
                <a href = "mailto: ${values.email}"><p class="user-data user-email"><i class="fa-solid fa-envelope cont-ico"></i> ${values.email}</p></a>
                </div>
                
                <div class="user-int cont-block phone">
                <a href = "tel: ${values.phone}"><p class="user-data user-phone"><i class="fa-solid fa-phone cont-ico"></i> ${values.phone}</p></a>
                </div>

                <button type="button" class="btn btn-danger del-user"  onclick="remove(userCard${values.id});resultUpdate()">Remove user</button>

                </div>
                </div>`    

    });

    document.getElementById("userPool").innerHTML=users;
    console.log(completedata.length)
    console.log(completedata)


    // console.log(completedata.splice(2,1))
    console.log(completedata.length)
    let userPool = document.getElementById("userPool");
    let numChildren = userPool.childElementCount
    let numUsers =
                          
      `
      <div class="card card-num-users s-shadow animate fade slide">
      <div class="card-body user-body">
    
      <div class="user-int sum-des">
      <p class="user-data summ-des"> Total users:</p>
      </div>
    
      <div class="user-int sum-num">
      <p class="user-data summ-num" id="result-count">${numChildren}</p>
      </div>
    
      <div>
      </div>`   
    
      document.getElementById("userSummarizer").innerHTML=numUsers; 
})  
    
.catch((err)=>{
    console.log(err);
});






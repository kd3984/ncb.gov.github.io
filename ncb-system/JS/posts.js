const apiURL = "https://jsonplaceholder.typicode.com/"

function remove(el) {
  el.remove();
  confirm('Are you sure you want to delete post?');
}

function resultUpdate () {
  document.getElementById("result-count").innerHTML=postPool.childElementCount;
}

fetch(apiURL + "posts").then((data)=>{
    return data.json();
}).then((completedata) => {
    let post="";
    completedata.map((values)=>{
        post += `
        <div class="card user-card animate fade slide" id="userCard${values.id}">
                <div class="card-body user-body s-shadow">
                
                <div class="user-int l-shortened id-block s-id">
                <p class="user-data user-id"> ${values.id}</p>
                </div>

                <div class="user-int r-shortened id-block s-name">
                <h5 class="card-title user-data user-name u-name"> ${values.title}</h5>
                <p class="user-data user-username u-uname"> ${values.body}</p>
                </div>

                <button type="button" class="btn btn-danger del-user"  onclick="remove(userCard${values.id});resultUpdate()">Remove post</button>

                </div>
                </div>`    

    });

    document.getElementById("postPool").innerHTML=post;


    // console.log(completedata.splice(2,1))
    console.log(completedata.length)
    let postPool = document.getElementById("postPool");
    let numChildren = postPool.childElementCount
    let numUsers =
                          
      `
      <div class="card card-num-users s-shadow animate fade slide">
      <div class="card-body user-body">
    
      <div class="user-int sum-des">
      <p class="user-data summ-des"> Total posts:</p>
      </div>
    
      <div class="user-int sum-num">
      <p class="user-data summ-num" id="result-count">${numChildren}</p>
      </div>
    
      <div>
      </div>`   
    
      document.getElementById("postSummarizer").innerHTML=numUsers; 
})  
    
.catch((err)=>{
    console.log(err);
    alert('Page may not have loaded correctly. Contact administration if issue persists.')
});






console.log('success');
document.addEventListener("DOMContentLoaded", function() {
  fetchProduct();
})


function fetchProduct() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        `https://fakestoreapi.com/products`,
        true
    );
    xhr.onreadystatechange = function() {
        if (this.status == 200 && this.readyState === 4) {
            let result = JSON.parse(this.responseText);
            console.log(result);
            createCard(result);
        }
    }
    xhr.send();
}

function createCard(apiResult){
  const container = document.getElementById('product-card');
  console.log(apiResult);
  //delete apiResult[0];
  apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    // Construct card content
    const cardContent = `
      <div class="card col-md-3 product-item" id="productCard-${idx}">
      <img class="card-img-top product-item" src="${result.image}" alt="">
      <div class="card-title">
        <br>
        <h5 class="mb-0" style="text-color: red"><b>${result.title}<b></h3>
        <hr>
        <p class="mb-0"><b>${result.price}<b>$</p>
      </div>
      </div>
    `;

    // Append newyly created card element to the container
    container.innerHTML += cardContent;
  })
}

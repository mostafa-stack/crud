$("html").niceScroll();
var proContainer ;
var newPriceVal;
var priceVal;
if (localStorage.getItem("productsData") == null) {
    proContainer = [];
} else {
    proContainer = JSON.parse(localStorage.getItem("productsData"));
    proBody();
}
function addProduct() {
    let productName = document.getElementById("productNameInp").value ,
        productPrice = document.getElementById("productPriceInp").value,
        productCategory = document.getElementById("productCategoryInp").value,
        productDesc = document.getElementById("productDescInp").value,
        product = 
        {
            name : productName,
            price : productPrice,
            category : productCategory,
            Desc : productDesc
        };
    proContainer.push(product);
    localStorage.setItem("productsData", JSON.stringify(proContainer));
    proBody();
}
function proBody() {
    var proShape ="";
    for (let i = 0; i < proContainer.length; i++) {
        proShape += `<div class="col-md-4">
                <div class="card mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> `+ proContainer[i].name + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ proContainer[i].price + `</h6>
                        <p class="card-text">`+ proContainer[i].Desc + `</p>
                        <a href="#" class="card-link"  onclick="updatePro(`+i+`)">Update</a>
                        <a href="#" class="card-link" onclick="deletePro(`+ i +`)">Delete</a>
                    </div>
                </div>
            </div>`;
            }
document.getElementById("addOne").innerHTML= proShape
    
}
function searchPro(key) {
    var proShape = "";
    for (let i = 0; i < proContainer.length; i++) {
        
        var names = proContainer[i].name.toLowerCase()
        if (names.search(key.toLowerCase()) !== -1) {
            proShape += `<div class="col-md-4">
                <div class="card mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> `+ proContainer[i].name + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ proContainer[i].price + `</h6>
                        <p class="card-text">`+ proContainer[i].Desc + `</p>
                        <a href="#" class="card-link" onclick="updatePro(`+ i +`)">Update</a>
                        <a href="#" class="card-link" onclick="deletePro(`+i+`)">Delete</a>
                    </div>
                </div>
            </div>`;
            
        }
        
    }
    document.getElementById("addOne").innerHTML = proShape


}
function deletePro(indx) {
    var deleted = proContainer.splice(indx, 1);
    localStorage.setItem("productsData", JSON.stringify(proContainer));
    proBody();

}



function newUpdate() {
    newPriceVal = document.getElementById("productPriceInp").value;
}

function updatePro(index) {
    if (typeof (newPriceVal) == "undefined") {
        window.alert("input new price then click 'New Update' button then select the product you want to change then click update ")
    } else {
        proContainer[index].price = newPriceVal;
        localStorage.setItem("productsData", JSON.stringify(proContainer));
        proBody();
    }

}









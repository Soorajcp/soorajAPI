fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{

                let allProduct = json
                console.log(allProduct)

                let productLIst = document.getElementById("product-list")

                for(let i = 0; i < allProduct.length; i++){
                    let productElement = document.createElement("div")
                    
                    productElement.classList.add("col-12")
                    productElement.classList.add("col-sm-6")
                    productElement.classList.add("col-md-4")
                    productElement.classList.add("col-lg-4")
                    productElement.classList.add("col-xl-3")
                    productElement.classList.add("col-xxl-3")
                    
                    productElement.innerHTML =`<div class="card">
                                            <img src="${allProduct[i].image}" class="card-img-top product-image" alt="...">
                                            <div class="card-body">
                                              <h5 class="card-title">${allProduct[i].title}</h5>
                                              <p class="text-success">$ ${allProduct[i].price}</p>
                                              <p class="card-text product-des">${allProduct[i].description}.</p>
                                              <a href="#" class="btn btn-warning">View product</a>
                                            </div>
                                        </div>`
                    
                    productLIst.appendChild(productElement)
                }
            })



                    

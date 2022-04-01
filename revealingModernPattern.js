const getFromApi = (function(){
    function getAllProducts(){
        fetch("/api/products")
            .then(res => res.json())
            .then(data => console.log(data))
    }
    function getSingleProduct(){
        fetch(`/api/products/${id}`)
    }

    return {
        getAllProducts,
        getSingleProduct
    }
})()

getFromApi.getAllProducts()
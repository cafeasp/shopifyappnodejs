//post to create product

function create(shop) {
    console.log('create product for ' + shop);
    $.ajax({
        url: '/shopify/app/create-product?shop=' + shop,
        type: 'Post',
        success: function (result) {
            console.log(result);
        }
    });
}

function view(shop) {
    console.log('view products for ' + shop);
    $.ajax({
        url: '/shopify/app/products?shop=' + shop,
        type: 'Get',
        success: function (result) {
            console.log(result);
        }
    });
}
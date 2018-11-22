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

//create product by user input
function createByUser(shop) {
    let title = $("#title").val();
    let body_html = $("#body_html").val();
    let vendor = $("#vendor").val();
    let product_type = $("#producttype").val();
    let tags = $("#tags").val();


    let product = {
        title: title,
        body_html: body_html,
        vendor: vendor,
        product_type: product_type,
        tags: tags
    }


    $.ajax({
        url: '/shopify/app/create-product?shop=' + shop,
        type: 'Post', processData: false,
        data: JSON.stringify(product),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            console.log(result);
            if (result) {
                view(shop);
            }
        }
    });
}


//view products
function view(shop) {
    console.log('view products for ' + shop);
    $.ajax({
        url: '/shopify/app/products?shop=' + shop,
        type: 'Get',
        success: function (result) {
            console.log(result);
            addRows(result.products);
        }
    });
}
//add products to table
function addRows(products) {
    $("#products tbody").empty();
    products.forEach(element => {
        let row = '<tr><th scope="row">' + element.id + '</th><td>' + element.title + '</td><td>' + element.body_html +
            '</td><td>' + element.vendor + '</td><td>' + element.product_type + '</td><td>' + element.tags + '</td></tr>';
        $("#products tbody").append(row);
    });
}

function clearFields() {
    $("#title").val('');
    $("#body_html").val('');
    $("#vendor").val('');
    $("#producttype").val('');
    $("#tags").val('');
}
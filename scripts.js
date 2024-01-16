document.addEventListener('DOMContentLoaded', function() {
    var productCards = document.getElementsByClassName('product-card');

    for (var i = 0; i < productCards.length; i++) {
        var button = productCards[i].querySelectorAll('button');
        var price = productCards[i].querySelectorAll(".price")
        
        button.forEach(btn => {
            btn.addEventListener('click', function() {
                price.forEach(pr => {
                    alert(`Total Price: ${pr.innerHTML}`)
                })
            });
        })
    }

});
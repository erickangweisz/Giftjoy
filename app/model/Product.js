"use strict";
var Product = (function () {
    function Product(id, client_id, nickname, title, description, location, image, category, telephone) {
        this.id = id;
        this.client_id = client_id;
        this.nickname = nickname;
        this.title = title;
        this.description = description;
        this.location = location;
        this.image = image;
        this.category = category;
        this.telephone = telephone;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map
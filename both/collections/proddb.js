Schemas.Product = new SimpleSchema({
    sku: {type: String, unique: true},
    name: {type: String},    
    price: {type: Number},
    qt: {type: Number}
});

ProdDB.attachSchema(Schemas.Product);

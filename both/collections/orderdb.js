Schemas.orderReceipient = new SimpleSchema({
    firstName: {type: String},
    lastName: {type: String},    
    mobile: {type: String},
    email: {type: String},
    address: {type: String}
});

Schemas.orderPayment = new SimpleSchema({
    option: {
        type: String
    },
    detail: {
        type: String,
        optional: true
    }
}); 

Schemas.orderBuyer = new SimpleSchema({
    buyerid: {type: String}
});

Schemas.Order = new SimpleSchema({
    orderId: {type: String},
    orderList: {type: Array},
    'orderList.$': {
        type: Schemas.Product
    },
    buyer: {type: Schemas.orderBuyer},
    receipient: {type: Schemas.orderReceipient},
    total: {type: Number}
});

Schemas.test = new SimpleSchema({
    testid: {type: String},
    testamount: {type: Number}
});

OrderDB.attachSchema(Schemas.Order);
TestDB.attachSchema(Schemas.test);
Schemas.Receipient = new SimpleSchema({
    firstName: {type: String},
    lastName: {type: String},    
    mobile: {type: String},
    email: {type: String},
    address: {type: String}
});

Schemas.Item = new SimpleSchema({
    itemID: {type: String},
    itemName: {type: String},    
    itemPrice: {type: Number},
    itemQt: {type: Number},
    itemTotal: {type: Number},
});

Schemas.Payment = new SimpleSchema({
    option: {
        type: String
    },
    detail: {
        type: String,
        optional: true
    }
});

Schemas.Buyer = new SimpleSchema({
    buyerid: {type: String},
    payment: {type: Schemas.Payment}
});

Schemas.OrderList = new SimpleSchema({
    orderId: {type: String},
    orderList: {type: Array},
    'orderList.$': {
        type: Schemas.Item
    },
    buyer: {type: Schemas.Buyer},
    receipient: {type: Schemas.Receipient},
    total: {type: Number}
});

Schemas.test = new SimpleSchema({
    testid: {type: String},
    testamount: {type: Number}
});

OrderDB.attachSchema(Schemas.OrderList);
TestDB.attachSchema(Schemas.test);
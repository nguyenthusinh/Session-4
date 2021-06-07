const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

for (let x in product) {
    console.log(x);
}

//x receives from is property .

for(let y in product){
    console.log(y + ":" + product[y]);
}



//

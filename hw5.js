 products=[
    {
        id:"1",
        Name:"Xiaomi portable charger 20000mah",
        Brand:"Xiaomi",
        Price:"428",
        Color:"White",
        Category:"Charger",


    },
    {
        id:"2",
        Name:"VSmart Active 1",
        Brand:"VSmart",
        Price:"5487",
        Color:"Black",
        Category:"Phone",


    },
    {
        id:"3",
        Name:"IPhone X",
        Brand:"Apple",
        Price:"21490",
        Color:"Gray",
        Category:"Phone",


    },
    {
        id:"4",
        Name:"Samsung Galaxy A9",
        Brand:"Samsung",
        Price:"8490",
        Color:"Blue",
        Category:"Phone",


    }
];
// for(let x=0; x < products.length; x++){
//     console.log(products[x].Name;
//     console.log(products[x].Price)
// }

// //Cau 5.2 a
// for(let x=0; x < products.length; x++){
//     console.log('#' + products[x].id + '. '+ products[x].Name);
//     console.log(products[x].Price)
// }

//Cau5.2 b

// let index = prompt("Enter product position");
// if(isNaN(index)){
//     alert('Invalid iput');
// }
// else{
//     console.log(products[index]);
// }
//Cau 5.3
// let cat = prompt("Enter the category?");
// for(x=0; x<products.length;x++){
//     if(products[x].Category==cat){
//         console.log(products[x].Name);
//         console.log(products[x].Price);
//     }
//     else{
//         alert('invalid iput')
//     }
// }
//Cau5.4
products[0].providers=['Phukienzero','Dietuccc'];
products[1].providers=['Tgdd','Ddghn','VhStore'];
products[2].providers=['Tgdd'];
products[3].providers=['Tgdd'];
// for(x=0; x<products.length; x++){
//     console.log('#' + products[x].id + '. '+ products[x].Name);
//     console.log(products[x].Price);
//     console.log(products[x].providers);
// }

//Cau5.5
let prov = prompt("Enter provider name");
for(let x in products){
let a = products[x].providers.lastIndexOf(prov);
    if(a==-1){
    continue;
}
else{
    console.log(products[x]);
}
}
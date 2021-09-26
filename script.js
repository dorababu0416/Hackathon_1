/*var request=new XMLHttpRequest();
request.open('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data[0]);
    for(var i=0; i<data.length; i++){
        var parent=document.createElement("div");
        var img=document.createElement("img");
        var att=document.createAttribute("src");
        att.value= data[i].image_link;
        img.setAttributeNode(att);
        parent.append(img);
        document.body.append(parent);
        img.style.margin= "20px";
        img.style.height= "500px";
        img.style.width= "400px";
    }
}*/

const makeup= async () => {
    try{
        const resp= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const values= await resp.json();
        for(var i=0;i<values.length; i++){
        var parent=document.createElement("div");
        var img=document.createElement("img");
        var att=document.createAttribute("src");
        att.value= values[i].image_link;
        img.setAttributeNode(att);
        parent.append(img);
        document.body.append(parent);
        var head=document.createElement("h1");
        head.innerText=values[i].name;
        parent.append(head);
        var brand=document.createElement("p");
        brand.innerText=`Brand  :  ${values[i].brand}`;
        parent.append(brand);
        var desc=document.createElement("p");
        desc.innerText=values[i].description;
        parent.append(desc);
        var price=document.createElement("p");
        price.innerText=`${values[i].price}  ${values[i].price_sign}`;
        parent.append(price);
        var prod_link=document.createElement("a");
        prod_link.setAttribute("href", values[i].product_link);
        prod_link.innerText="Click here for product link";
        parent.append(prod_link);
        }
    }
    catch(err){
        console.log(err.message);
    }
}

makeup();
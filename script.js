const makeup= async () => {
    try{
        const resp= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const values= await resp.json();
        for(var i=0;i<values.length; i++){
            console.log(values[7]);
            var div1=document.createElement("div")
            div1.setAttribute("class", "parent");
            document.body.append(div1);
            var div_img=document.createElement("div");
            div_img.setAttribute("class", "image");
            var img=document.createElement("img");
            img.setAttribute("src", values[i].image_link);
            img.setAttribute("alt", "Image not available");
            div_img.append(img);
            div1.append(div_img);
            var about=document.createElement("div");
            var name1=document.createElement("h2");
            name1.innerText=`${values[i].name}`;
            about.append(name1);
            var brand1=document.createElement("p");
            brand1.setAttribute("class", "brand");
            brand1.innerText=`Brand : ${values[i].brand}`;
            about.append(brand1);
            var desc=document.createElement("p");
            desc.innerText=`${values[i].description}`;
            about.append(desc);
            var div_last=document.createElement("div");
            div_last.setAttribute("class", "last");
            about.append(div_last);
            var price=document.createElement("p");
            price.innerText=`${values[i].price}${values[i].price_sign}`;
            div_last.append(price);
            var p_link=document.createElement("a");
            p_link.setAttribute("href", `${values[i].product_link}`);
            p_link.innerText="Click here for product profile";
            div_last.append(p_link);
            div1.append(about);
        }
    }
    catch(err){
        console.log(err.message);
    }
}

makeup();
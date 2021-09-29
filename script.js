const makeup= async () => {
    try{
        const resp= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const values= await resp.json();
        display(values,0,10);
    }
    catch(err){
        console.log(err.message);
    }
}

makeup();

function display(values,a,b){
    for(var i=a;i<b && i<values.length; i++){
        console.log(values[values.length-1]);
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
        desc.innerHTML=`${values[i].description}`;
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
        var btn_div=document.createElement("div");
        btn_div.setAttribute("class", "btn_div");
        document.body.append(btn_div);
        var prv_btn=document.createElement("button");
        prv_btn.innerText="< Previous";
        if(a==0){
            prv_btn.disabled=true;
        }
        btn_div.append(prv_btn);
        prv_btn.addEventListener("click", function(){
            document.body.innerHTML="";
            display(values,a-10,a);
        });
        var nxt_btn=document.createElement("button");
        nxt_btn.innerText="Next >";
        if(b>=values.length){
            nxt_btn.disabled= true;
        }
        btn_div.append(nxt_btn);
        nxt_btn.addEventListener("click", function(){
            document.body.innerHTML="";
            display(values,b,b+10);
        });
}
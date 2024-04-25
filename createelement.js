let total=0;

let a=document.getElementById('a').addEventListener('submit',function(event){
    event.preventDefault();
    let product=document.getElementById("product").value
    let price=document.getElementById('price').value
    let quatity=document.getElementById("quatity").value
    // document.getElementById('td1').innerHTML=product;

    let a=document.createElement("td");
    a.textContent=product
    let b=document.createElement("td");
    b.textContent=quatity
    let c=document.createElement("td");
    c.textContent=price
    let h=document.createElement('td');
    h.textContent=quatity*price
    total+=quatity*price

    let r= document.createElement('tr');
    r.append(a,b,c,h,);
    
   document.getElementById('total').innerHTML=total;
  
    document.getElementById('table').append(r)
})







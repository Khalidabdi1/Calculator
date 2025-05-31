let num =document.querySelectorAll(".num")

let show= document.querySelector(".show")

let AC =document.querySelector(".AC")

let DEL= document.querySelector(".DEL")

let equal=document.querySelector(".equal")
//store input
let array=[]



//number
num.forEach((e)=>{

  e.addEventListener("click",()=>{

  


        if(!(isNaN(e.textContent))){
            //is number
            array.push(parseInt(e.textContent))

            
            // show.textContent+=e.textContent
        }else{
            //is symbol
         
        }

        if(e.textContent==="."||e.textContent==="+"||e.textContent==="-"||e.textContent==="*" ||e.textContent==="/"||e.textContent==="%" ){
            // show.textContent+=e.textContent
            array.push(e.textContent)

        }

        // show.textContent+=e.textContent
        console.log(array)

        showelement()

  })

 

})

//display 
function showelement(){
    // array.map((m)=>{
    //     show.textContent+=m

    //   })
show.textContent=""
    for(let i=0;i<array.length;i++){
        show.textContent+=array[i]
    }
}


//delete all in display
AC.addEventListener("click",()=>{
    show.textContent=" "
    array=[]
})

//delte last one
DEL.addEventListener("click",()=>{
array.pop()
})


//reslout

equal.addEventListener("click",()=>{
    let total=" "

  for(let i=0;i<array.length;i++){
console.log(`this is arr ${  array[i]}`)
total+=array[i]
  }
console.log(total)


  console.log(eval(total))
   
show.textContent=eval(total)

})





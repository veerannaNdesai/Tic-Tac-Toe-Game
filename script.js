let btns = document.querySelectorAll(".content-btn")
let turno = true;
const resetBtn = document.querySelector(".reset-btn")
let afterContainer = document.querySelector(".after-container")


let winPat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [1,4,7]
]

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turno){
            btn.innerText = "x"
            turno = false
        }else{
            btn.innerText = "o"
            turno = true
        }
        btn.disabled = true

        checkWinner() 
    } )
})

const checkWinner = () =>{
    for(let i of winPat){
        let pos1Val = btns[i[0]].innerText
        let pos2Val = btns[i[1]].innerText
        let pos3Val = btns[i[2]].innerText

        if(pos1Val!="" && pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
            document.getElementById("winner-txt").innerText = `Congrats Winner is ${pos1Val}!!!`
        btndisabled()
        afterContainer.classList.remove("after-container1")
        
        }
        }
    }
}
// console.log(afterContainer.classList)
resetBtn.onclick = ()=>{
    for(let btn of btns){
        btn.innerText = ""
        btnEnabled()
        turno = true
        afterContainer.classList.add("after-container1")
    }
}

// let reset = document.querySelector("#rstbtn")


const btnEnabled = ()=>{
    for(let btn of btns){
        btn.disabled = false
    }
}

const btndisabled = ()=>{
    for(let btn of btns){
        btn.disabled = true
    }
}





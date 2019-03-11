function Pessoa(){
    setInterval(()=>{
        this.idade++
        console.log(this.idade)// não varia arrowFunction
    },1000)
}

 new Pessoa
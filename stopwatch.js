function StopWatch(){
    let startTime,EndTime,running,duration = 0

    this.start = function(){
        if(running){
            console.log("Aleady running")
        }
        else{
            running = true
            startTime = new Date()
        }
    }
    this.end = function(){
        if(!running){
            console.log('Already stopped running')
        }
        else{
            running = false
            EndTime = new Date()

            const seconds = ( EndTime.getTime() - startTime.getTime() ) / 1000

            duration += seconds
        }
    }

    this.reset = function (){
        startTime = null;
        EndTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, "Duration" , {
        get : function(){
            return duration
        }
    })

}
let newStopWatch = new StopWatch()
console.log(newStopWatch)



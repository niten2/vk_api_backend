// http://localhost:5000/v1/web-drivers/follow-explore
// http://localhost:5000/

const test = (first, second, three) => {
  // console.log(1111)
  console.log(first, second, three)
}


function MakeSpeckledBall( ball ) {
  // console.log(arguments)
    // var function_name = "draw";
    // var prev_func = ball[function_name]
  console.log("MakeSpeckledBall")

    // ball[function_name] = function () {
        ball.apply(this, arguments)
        // console.log("and with dots!")
    // }

    return ball;
}


MakeSpeckledBall(test, 3333, 444)


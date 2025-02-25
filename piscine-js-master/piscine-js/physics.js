const example = {
   // f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10
  } // to delete
// well f this shit ... zero for consistency, someties you delete sometimes not ...
// var m
// var F
// var Δv
// var Δt
// var t
// var d

// const a1 = F/m
// const a2 = Δv/Δt
// const a3 = 2*d/t^2

const getAcceleration = (data) => {
    if (data.f && data.m) {
        return data.f / data.m; // easiest check in history
    }

    if (data.Δv && data.Δt) {
        return data.Δv / data.Δt; 
    }

    if (data.d && data.t) {
        return (2 * data.d) / Math.pow(data.t, 2); 
    }

    return "impossible"; 
}

console.log(getAcceleration(example))
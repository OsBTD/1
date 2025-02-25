const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132

}

const oneYear2Seconds = 31557600 

const dogYears = (planet, dogAgeinS) => {

    if (!(planet in orbitalPeriods)) {
        throw new Error(`Invalid planet: ${planet}`) // new concept
    }

    let n = ((7*dogAgeinS)/(oneYear2Seconds*orbitalPeriods[planet]))
    let two_decimal_points = Math.round((n * 1e2))/1e2; //lol so stupid
    return two_decimal_points
}

// deep equality ...
// the is a possibility of useing +someNumber.toFixed(precision) but it's costly ad not tpe safe

//console.log(dogYears("earth",1000000000))
//console.log(dogYears('mercury', 2134835688))

// lol if its not defined wth does it log ...
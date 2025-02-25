const chunk = (arr,size) => {
    var tempArr = []
    const finalArr = []
    var counter = 0
    let i = 0
    while (i < arr.length){
       
        tempArr.push(arr[i])
        counter++
        if (counter === size){
            finalArr.push(tempArr)
            counter = 0
            tempArr = []
        }
        i++
    }

   
    if (tempArr.length > 0) { // Only push if not empty
        finalArr.push(tempArr);
    }

    // could do  aconsoluted test to see if the last array is empty ad slice it but ...
    
    return finalArr
    
}

console.log(chunk([1,2,3,4,5,6,7,8,9], 4))
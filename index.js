const integer = (num) => {
    let array = [];
    for (let i = 0; i <= num; i++) {
        if ((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)) {
            // console.log('yu-gi-oh');
            array.push('yu-gi-oh')
        } else if ((i % 2 === 0) && (i % 3 === 0)) {
            // console.log('yu-gi')
            array.push('yu-gi')
        } else if (i % 2 === 0) {
            // console.log('yu')
            array.push('yu')
        } else if (i % 3 === 0) {
            // console.log('gi')
            array.push('gi')
        } else if (i % 5 === 0) {
            // console.log('oh')
            array.push('oh')
        } else {
            // console.log(i)
            array.push(i)
        }
    }
    console.log(array);
}

integer(100);

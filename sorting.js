let nums =  [2, 3, 3, 4, 5, 6, 8, 5, 3, 2, 2];

function sortCount(nums) {
    
    let newObj = {};
    let numLength = nums.length;
    let sortCountNum = [];

    for(let i = 0; i < numLength; i++){
        (newObj[nums[i]] >= 1) ? newObj[nums[i]]++ : newObj[nums[i]] = 1;
    }

    for (const n in newObj) {
        sortCountNum.push(newObj[n])
    }

    return sortCountNum;
}

console.log(sortCount(nums))
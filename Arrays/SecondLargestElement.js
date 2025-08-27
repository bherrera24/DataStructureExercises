const largestAndSecondLargestElement= (nums)=>{
    let largestElement = Number.MIN_SAFE_INTEGER;

    let secondLargestElement= Number.MIN_SAFE_INTEGER;

    for(let i=0; i<nums.length; i++){
        if(nums[i]> largestElement){
            secondLargestElement= largestElement;
            largestElement= nums[i];
     
        }else if(nums[i]> secondLargestElement && nums[i]<largestElement){
            secondLargestElement=nums[i]
        }
       
    }

         return {largestElement, secondLargestElement}
}

const print=()=>{
        const {largestElement, secondLargestElement}=largestAndSecondLargestElement([12, 13, 14, 11 ,10])
        console.log("largestElement:", largestElement, "secondLargestElement:", secondLargestElement)
}

print();
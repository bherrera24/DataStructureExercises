const nextGreaterElement = (nums1, nums2) => {
    const nextGreaterElement = new Map();
    const stack = [];

    for (nuum of nums) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            const smallerNum= stack.pop();
            nextGreaterElement.set(smallerNum, nums2[i]);
        }
        stack.push(num);
    }
    return nums1.map(num => nextGreaterElement.get(num) || -1);
}
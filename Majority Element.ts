function majorityElement(nums: number[]): number | undefined {

    for (let i = 0; i < nums.length; i++) {
        let counter = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                counter = counter + 1
            }
        }
        if (counter > nums.length / 2)
            return (nums[i])
    }

};
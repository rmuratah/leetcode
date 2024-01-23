function containsDuplicate(nums: number[]): boolean {
    const s = new Set(nums);
    console.log(s.size)
    return s.size !== nums.length
};
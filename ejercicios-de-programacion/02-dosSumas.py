def twoSum(nums, target):
    for idx, val in enumerate(nums):
        if target - val in nums[idx + 1:]:
            return [idx, nums[idx + 1:].index(target - val) + (idx + 1)]

#            0  1  2   3
demoNums = [3,2,4]
demoTarget =  6

print(
    twoSum(demoNums, demoTarget)
)
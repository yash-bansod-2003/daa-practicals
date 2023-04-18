function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: already sorted
    }

    // Split the array in half
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const merged = [];
    let leftIdx = 0;
    let rightIdx = 0;

    // Merge the two halves by comparing elements
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            merged.push(left[leftIdx]);
            leftIdx++;
        } else {
            merged.push(right[rightIdx]);
            rightIdx++;
        }
    }

    // Add remaining elements from left and right if any
    while (leftIdx < left.length) {
        merged.push(left[leftIdx]);
        leftIdx++;
    }

    while (rightIdx < right.length) {
        merged.push(right[rightIdx]);
        rightIdx++;
    }

    return merged;
}

// Example usage:
const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 5, 5, 6, 9]
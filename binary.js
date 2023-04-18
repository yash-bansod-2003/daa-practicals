
const binary = (arr, low, high, x) => {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
        return mid;
    }

    if (arr[mid] < x) {
        return binary(arr, mid + 1, high, x);
    } else {
        return binary(arr, low, mid - 1, x);
    }
}

const arr = [2, 3, 5, 6, 7, 9];
const result = binary(arr, 0, arr.length - 1, 5);
result === -1 ? console.log('not found') : console.log(`found at index ${result}`);



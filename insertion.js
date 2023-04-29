function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let temp = array[i];
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

const a = [4, 3, 1, 2, 6, 8, 0];
console.log('orignal ', a);
const s = insertionSort(a);
console.log('sorted ', s); 
const partision = (array, low, high) => {
    let i = low + 1;
    let j = high;
    let pivot = array[low];
    let temp;

    do {
        while (array[i] <= pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i < j) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    } while (i < j);

    temp = array[low];
    array[low] = array[j];
    array[j] = temp;
    return j;
}

const quickSort = (array, low, high) => {
    let partisionIndex;
    if (low < high) {
        partisionIndex = partision(array, low, high);
        quickSort(array, low, partisionIndex - 1);
        quickSort(array, partisionIndex + 1, high);
    }
}

const array = [3, 1, 2, 5, 8, 7];
quickSort(array, 0, array.length - 1);
console.log(array);
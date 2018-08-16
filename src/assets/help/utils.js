export function diff(arr1, arr2) {
    return arr1.concat(arr2).filter(function(arg){
        return !(arr1.indexOf(arg) >= 0 && arr2.indexOf(arg) >= 0);
    });
}

export function goodsUrl(id) {
    return `${address}item-${id}.html`
}

export function deleteArrByKey(arr, key) {
    let temp = [];
    arr.forEach((v, k)=> {
        if(Number(k) !== Number(key)){
            temp[k] = v
        }
    });

    return temp;
}
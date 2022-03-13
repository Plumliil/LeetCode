// 加勒比海盗船,最优装载问题

// 装载数量尽可能多,但是船的容量固定

// 船的重量 30

function goodsNumMax(goods,weight=30) {
    let arr=goods.sort((a,b)=>a-b);
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(weight-arr[i]>=0){
            weight-=arr[i];
            res.push(arr[i]);
        }
    }
    console.log(res.length);
    return res
}

let goods = [4, 10, 7, 11, 3, 5, 14, 2];


console.log(goodsNumMax(goods));
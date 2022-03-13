// 假设有n种宝物,每种宝物有一定的重量 w 和一定的价值 v ,
// 背包的装载有限,只能带走m重量的价值,一种宝物只能拿一样,
// 宝物可以分割,怎样拿才会使价值最大 

function fn(goods) {
    goods=goods.sort((a,b)=>a.w/a.v-b.w/b.v)
    // let goodsMap=goods.map()

    console.log(goods);
}

let goods = [
    { i: 1, w: 4, v: 3 },
    { i: 2, w: 2, v: 8 },
    { i: 3, w: 9, v: 18 },
    { i: 4, w: 5, v: 6 },
    { i: 5, w: 5, v: 8 },
    { i: 6, w: 8, v: 20 },
    { i: 7, w: 5, v: 5 },
    { i: 8, w: 4, v: 6 },
    { i: 9, w: 5, v: 7 },
    { i: 10, w: 5, v: 15 }
];

fn(goods)
export const safe_token = state => state.safe_token;

export const setAttributes = (state) => {
    let end = [];
     state.attributes && state.attributes.forEach((v, k) =>{
        end[k] = {};
        end[k].id = v.id;
        end[k].name = v.name;
        end[k].type = v.type;
        end[k].value = [];
        v.value.forEach((v1, k1)=> {
            end[k].value.push({
                id: state.skuKeys.indexOf(`${v.id}_${v1}`) + '',
                cname: v1,
                isActiveC: false,
                notClick: false,
                // inventory :state.stockGoods[k1].store_nums == 0 ? true :false
                 inventory :state.stockGoods[k1].store_nums
            })
          
             
        })
     
    });
     
    return end
};


export const setStockGoods = (state) => {
    let end = {};
    state.stockGoods && state.stockGoods.forEach((v, k) =>{
        let a = '';
        v.goodsInfo.forEach((v1, k1) =>{
            a = a ? `${a};${state.skuKeys.indexOf(`${v1.id}_${v1.value}`)}` : `${state.skuKeys.indexOf(`${v1.id}_${v1.value}`)}`
        });
        end[a] = {};
        end[a] = {
            goodsID: v.goodsID,
            price: v.sell_price,
            count: v.store_nums,
        }
    });
    return end
};
export const promo = state => state.promo;
export const province = state => state.province;
export const triumph = state => state.triumph;
export const play = state => state.play;
export const quotas = state => state.quotas;
export const address = state => state.address;
export const address_id = state => state.address_id;
export const initiates = state => state.initiates;
export const conclude = state => state.conclude;
export const joinquota = state => state.joinquota;
export const switc = state => state.switch;
export const count = state => state.count;
export const goods_info = state => state.goods_info;
export const goods_photo = state => state.goods_info.photo;
export const checked = state => state.checked;
export const result = state => state.result;
export const cart_list = state => state.cart_info.cartList;
export const number = state => state.number;
export const carriage = state => state.carriage;
export const cart2_list = state => state.cart2_info.cartList;
export const cart2_list_sum = state => state.cart2_info.sum;
export const orders_id = state => state.orders_id;
export const cart2_delivery = state => state.cart2_info.delivery;
export const total = state => state.total;
export const cartnum = state => state.cartnum;
export const cart2_list_delivery_sum = (state) => {
    let end = 0
    for (let i in state.cart2_info.delivery) {
        end += Number(state.cart2_info.delivery[i])
    }
    return end
};

export const cart2_checked_coupons = (state) =>{
    let end = [];
    state.cart2_info.cartList && state.cart2_info.cartList.forEach((v, k) =>{
        end[parseInt(v.seller_id)] = [];
        v.coupon.forEach((v1, k1) => {
            if(k1 === 1){
                end[parseInt(v.seller_id)] = v1
            }
        })
    });
    return end
};
export const nothing1 = state => state.nothing1;
export const nothing2 = state => state.nothing2;

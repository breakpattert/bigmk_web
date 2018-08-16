import * as types from './mutation-types'

const mutations = {
    [types.SET_SAFE_TOKEN](state, safe_token) {
        state.safe_token = safe_token
    },
    [types.TO_CHANGE_CART_NUM](state, info) {
        state.cartnum = info
    },
    [types.SET_GOODS_INFO](state, info) {
        let arr = [];
        info.spec_array.attributes && info.spec_array.attributes.forEach((v, k) => {
            v.value.forEach((v1, k1) => {
                arr.push(`${v.id}_${v1}`)
            })
        });
        state.goods_info = info
        state.attributes = info.spec_array.attributes
        state.stockGoods = info.spec_array.stockGoods
        state.skuKeys = arr
    },
    [types.SET_CART_INFO](state, info) {
        state.cart_info = info
    },
    [types.SET_CART2_INFO](state, info) {
        // 处理check_coupons
        info.cartList.forEach((v, k)=> {
            if(v.coupon.length > 0) {
                state.check_coupons[v.seller_id] = v.coupon[1]
            }

            if(v.coupon.length === 0 && v.promotion && v.promotion.length > 0) {
                state.cart2_promotion[v.seller_id] = v.promotion[0]
              
            }

        })
        state.cart2_info = info
    },
    [types.TO_CHANGE_COUPON](state, info) {
        let bak_check_coupons = state.check_coupons
        state.check_coupons = []
        for (let k in bak_check_coupons) {
            if (parseInt(k) === parseInt(info.seller_id)) {
                state.check_coupons[k] = info.coupon
            }else{
                state.check_coupons[k] = bak_check_coupons[k]
            }
        }
    },
    [types.TO_CHANGE_SWITCH](state, info) {
        state.model_show = info
    },
};

export default mutations
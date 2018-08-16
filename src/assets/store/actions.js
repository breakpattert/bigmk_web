import * as types from './mutation-types'

export const toSetGoodsInfo = function ({commit}, info) {
    commit(types.SET_GOODS_INFO, info)
};

export const toSetCartInfo = function ({commit}, info) {
    commit(types.SET_CART_INFO, info)
};

export const toCart2Info = function ({commit}, info) {
    commit(types.SET_CART2_INFO, info)
};

export const toChangeCoupon = function ({commit}, info) {
    commit(types.TO_CHANGE_COUPON, info)
};

export const toChangeSwitch = function ({commit}, info) {
    commit(types.TO_CHANGE_SWITCH, info)
};
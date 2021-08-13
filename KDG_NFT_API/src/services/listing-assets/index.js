'use strict'
const BaseService = require('../../cores/base-service')
const Model = require('../../models/ListingAsset')

class ListingAssetsService extends BaseService {
  async getListingAsset ({ ids, limit }) {
    const data = await this
      .find({
        _id: { $nin: ids },
        quantity: { $gt: 0 }
      })
      .limit(limit)
      .sort({ quantity: 1 })
      .populate({
        path: 'asset owner'
      })
      .populate({
        path: 'buys',
        populate: 'from to'
      })
      .populate({
        path: 'bid_orders',
        populate: 'from to'
      })
      .lean()
    data.reverse()
    return data
  }

  async getTopSellAssets ({ limit }) {
    const data = await this
      .find({
        quantity: { $gt: 0 }
      })
      .sort({ quantity: 1 })
      .populate({
        path: 'asset owner'
      })
      .populate({
        path: 'buys',
        populate: 'from to'
      })
      .populate({
        path: 'bid_orders',
        populate: 'from to'
      })
      .lean()
      .limit(limit)
    data.reverse()
    return data
  }
}

module.exports = new ListingAssetsService(Model)

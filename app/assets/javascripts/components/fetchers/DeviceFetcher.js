import BaseFetcher from './BaseFetcher'
import Device from '../models/Device';

export default class DeviceFetcher {
  static fetchAll() {
    return BaseFetcher.withoutBodyData({
      apiEndpoint: '/api/v1/devices/',
      requestMethod: 'GET',
      jsonTranformation: (json) => json.devices.map(device => new Device(device))
    })
  }

  static fetchById(device) {
    return BaseFetcher.withoutBodyData({
      apiEndpoint: `/api/v1/devices/${device.id}`,
      requestMethod: 'GET',
      jsonTranformation: (json) => new Device(json)
    })
  }

  static create(device) {
    return BaseFetcher.withBodyData({
      apiEndpoint: `/api/v1/devices/${device.id}`,
      requestMethod: 'POST',
      body: device,
      jsonTranformation: (json) => new Device(json)
    })
  }

  static update(device) {
  
  }

  static delete(device) {
  
  }
}
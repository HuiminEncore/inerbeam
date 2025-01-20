// Universal type for timestamps
type Timestamp = {
    createdAt: string;
    updatedAt: string;
}


// Updated Device interface using Timestamp
interface Device extends Timestamp {
    id: string;
    deviceId: string;
    deviceName: string;
    deviceType: string;
}

// Add DeviceDataPayload interface for the parsed device_data
interface DeviceDataPayload {
    tvoc: number;
    co2: number;
    pressure: number;
    battery: number;
    lightlevel: number;
    deviceId: string;
    createdAt: number;
    pir: string;
    temperature: number;
    humidity: number;
    time: string;
    typename: string;
    updatedAt: number;
}

// Updated DeviceData interface using Timestamp
interface DeviceData extends Timestamp {
    id: string;
    device_data: string; // JSON string of DeviceDataPayload
}

// Pagination type for list queries
type PaginatedResponse<T> = {
    items: T[];
    nextToken?: string;
}

// Updated ListDevicesQuery using PaginatedResponse
interface ListDevicesQuery {
    listThings: PaginatedResponse<Device>
}

// Add ListDeviceDataQuery interface
interface ListDeviceDataQuery {
    listData: PaginatedResponse<DeviceData>
}

interface DeviceWithData {
    device: Device;
    data: DeviceData | null;
}


interface GetDeviceDataQuery {
    listThings: {
        items: Device[];
        nextToken?: string;
    };
    getData: DeviceData;
}

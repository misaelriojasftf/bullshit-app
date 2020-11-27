export interface RedData {
    app_id: string;
    dev_id: string;
    hardware_serial: string;
    port: number;
    counter: number;
    payload_raw: PayloadRaw;
    metadata: Metadata;
}

export interface Metadata {
    time: Date;
    frequency: number;
    modulation: string;
    data_rate: string;
    airtime: number;
    coding_rate: string;
    gateways: Gateway[];
}

export interface Gateway {
    gtw_id: string;
    timestamp: number;
    time: Date;
    channel: number;
    rssi: number;
    snr: number;
    rf_chain: number;
    latitude: number;
    longitude: number;
    altitude: number;
}

export interface PayloadRaw {
    type: string;
    data: number[];
}

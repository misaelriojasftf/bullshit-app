import { Component, OnInit } from '@angular/core';
import { RedData } from './data';
// import { data, application } from 'ttn';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  channel = 'uplink';
  appID = 'radio_test_4g';
  accessKey = 'ttn-account-v2.8d8mOGLdOrPlXEStgpJhLGyNZLEojzByvjyPoyYQtDg';
  constructor() { }

  messages: RedData[] = [];

  ngOnInit() {
    this.connectMQTT();
  }

  async connectMQTT() {
    // const client = await data(this.appID, this.accessKey);
    // client
    //   .on(this.channel, function (devID, payload) {

    //     const datavalue = JSON.stringify(payload);
    //     console.log('Received uplink from ', devID);
    //     console.log(payload);
    //     console.log(payload.metadata);
    //     console.log(datavalue);

    //     // send downlink
    //     // client.send("airbnb", new Buffer([0x0f, 0xaf]))
    //   })

  }

}

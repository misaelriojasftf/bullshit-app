import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { data } from "ttn"
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  mqtt().catch(function (err) {
    console.error(err)
    process.exit(1)
  })
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();


const mqtt = async function () {
  const appID = "radio_test_4g"
  const accessKey = "ttn-account-v2.8d8mOGLdOrPlXEStgpJhLGyNZLEojzByvjyPoyYQtDg"

  const client = await data(appID, accessKey);

  client
    .on("uplink", function (devID, payload) {

      const dataValue = JSON.stringify(payload);
      Logger.log("Received uplink from ", devID);
      Logger.log(payload);
      Logger.log(payload.metadata);
      Logger.log(dataValue);


    })
}


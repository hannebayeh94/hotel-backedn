"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const dotev = require("dotenv");
const bootstrap = async () => {
    dotev.config();
    const options = {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204,
        "credentials": true
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors(options);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT || 7000, () => {
        console.log('Conectado en el puerto:' + process.env.PORT);
    });
};
bootstrap();
//# sourceMappingURL=main.js.map
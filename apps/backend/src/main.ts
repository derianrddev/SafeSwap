import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

import { CoreModule } from "./core/core.module";

async function bootstrap() {
	const app = await NestFactory.create(CoreModule);

	const config = app.get(ConfigService);

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		}),
	);

	app.enableCors({
		origin: config.getOrThrow<string>("ALLOWED_ORIGIN"),
	});

	await app.listen(config.getOrThrow<number>("APPLICATION_PORT"));
}
bootstrap();

import {createServer} from 'nice-grpc';
import {
	GreetResponse,
} from '../compiled_proto/proto/hello_service.js';
import {HelloServiceImplementation, DeepPartial, HelloServiceDefinition} from '../compiled_proto/proto/hello_service.js';


const exampleServiceImpl: HelloServiceImplementation = {
	async greet(
		requestGet
	): Promise<DeepPartial<GreetResponse>> {
		return GreetResponse.create({greeting: 'Hello, ' + requestGet.name});
	},
};

const server = createServer();

server.add(HelloServiceDefinition, exampleServiceImpl);


server.listen('0.0.0.0:4000');
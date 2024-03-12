import {createChannel, createClient} from 'nice-grpc';
import {
	HelloServiceClient,
	HelloServiceDefinition,
} from '../compiled_proto/proto/hello_service.js';

const channel = createChannel('localhost:4000');

const client: HelloServiceClient = createClient(
	HelloServiceDefinition,
	channel,
);


client.greet({name: 'world'}).then(response => {
	console.log(response);
})
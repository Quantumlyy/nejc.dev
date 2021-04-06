import React from 'react';
import { ElixirLogo, GoLogo, RabbitMQLogo, ReactLogo, RustLogo, TypescriptLogo } from '../components/Icons';
import Technology from '../components/Technology';
import PageWrapper from './PageWrapper';

const How = () => {
	return (
		<PageWrapper>
			<h1>How I Do It</h1>
			<p>
				I highly leverage new bleeding-edge technologies and languages like Elixir and Go to stay on top of the game. You can find a list of
				my most-used technologies below.
			</p>

			<Technology
				color="#9c1fa5"
				icon={<ElixirLogo />}
				name="Elixir"
				type="Realtime, Backend"
				useCase={'Building fault-tolerant realtime systems that scale out across multiple nodes'}
				url={'https://elixir-lang.org/'}
			/>

			<Technology
				color="#232340"
				icon={<ReactLogo />}
				name="React"
				type="Frontend framework"
				useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
				url={'https://reactjs.org/'}
			/>

			{/* <Technology
				color="#00acd7"
				icon={<GoLogo />}
				name="Go"
				type="Backend"
				useCase={'It makes it easy to build simple, reliable, and efficient software.'}
				url={'https://golang.org/'}
			/>

			<Technology
				color="#dea584"
				icon={<RustLogo />}
				name="Rust"
				type="Backend, System"
				useCase={'Optimizing parts of Elixir code using Rust NIFs and writing efficient system code'}
				url={'https://www.rust-lang.org/'}
			/> */}

			<Technology
				color="#007acc"
				icon={<TypescriptLogo />}
				name="TypeScript"
				type="JS Superset"
				useCase={'Types for JS - will save your life when projects expand'}
				url={'https://www.typescriptlang.org/'}
			/>

			<Technology
				color="#FF6600"
				icon={<RabbitMQLogo />}
				name="RabbitMQ"
				type="Message queue"
				useCase={'Messaging between different services in a robust & durable way'}
				url={'https://www.rabbitmq.com/'}
			/>
		</PageWrapper>
	);
};

export default How;

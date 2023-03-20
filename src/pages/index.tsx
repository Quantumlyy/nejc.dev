import clsx from 'clsx';
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiDiscord, SiSpotify, SiTwitter } from 'react-icons/si';
import type { Data } from 'use-lanyard';
import { CardHoverEffect, hoverClassName } from '../components/hover-card';
import { Time } from '../components/time';
import { useUpdatingLanyard } from '../hooks/lanyard';
import me from '../images/me.jpg';
import { getMapURL } from '../server/apple-maps';
import { env } from '../server/env';
import { getLanyard } from '../server/lanyard';
import { age, discordId } from '../utils/constants';
import { formatList } from '../utils/lists';

export interface Props {
	lanyard: Data;
	map: string;
	location: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const lanyard = await getLanyard(discordId);
	const location = lanyard.kv.location ?? env.DEFAULT_LOCATION;

	const map = getMapURL(location);

	return {
		revalidate: 10,
		props: {map, location, lanyard},
	};
};

export default function Home(props: Props) {
	const {data: lanyard} = useUpdatingLanyard(discordId, props.lanyard);

	const status = lanyard.discord_status ?? 'offline';

	return (
		<main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16">
			<div className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-purple-200 dark:border-purple-500 dark:bg-purple-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52">
				<div className="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
					<Image
						src={me}
						placeholder="blur"
						height={96}
						width={96}
						className="h-24 w-24 rounded-full border border-purple-500 object-cover"
						alt="Photo of me"
					/>

					<div className="space-y-1">
						<h1 className="text-center font-title text-xl font-bold tracking-tighter text-purple-900 dark:text-purple-300 dark:text-glow-purple-500/50 md:text-left">
							nejc drobnič
						</h1>

						<p className="text-center text-purple-800 dark:text-purple-300/95 dark:text-glow-purple-500/50 md:text-left">
							{age} y/o full stack engineer 🪄
						</p>

						<p className="text-center text-purple-800 dark:text-purple-300/80 dark:text-glow-purple-500/30 md:text-left">
							<Link href="https://blog.quantumly.dev" target="_blank" rel="noopener noreferrer">
								blog ↗️
							</Link>
						</p>
					</div>
				</div>
			</div>

			<CardHoverEffect className="col-span-2 h-full">
				<Link
					href="https://twitter.com/quantumlyy"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-full items-center justify-center rounded-2xl bg-sky-500 text-4xl text-white',
						hoverClassName,
					)}
				>
					<span className="sr-only">Twitter</span>
					<span className="transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
						<SiTwitter />
					</span>
				</Link>
			</CardHoverEffect>

			<div
				className={clsx(
					'col-span-3 flex h-52 items-center justify-center rounded-2xl text-4xl md:col-span-2',
					{
						online: 'bg-green-500 text-green-50',
						idle: 'bg-orange-400 text-orange-50 ',
						dnd: 'bg-red-500 text-red-50',
						offline: 'bg-blurple text-white/90',
					}[status],
				)}
			>
				<div className="-rotate-[4deg] scale-[1] space-y-1 text-center md:scale-[1.2]">
					<h2>
						<SiDiscord className="inline" /> <span>{status}</span>
					</h2>

					<p className="text-base">
						{lanyard.discord_user.username}#{lanyard.discord_user.discriminator}
					</p>
				</div>
			</div>

			<Time />

			<CardHoverEffect className="col-span-3 h-52">
				{!lanyard?.spotify || !lanyard.spotify.album_art_url ? (
					<Link
						href="https://open.spotify.com/playlist/6yJ1T0Fjw73yUNGMohmYkk?si=bce0ba6f0390405a"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
					>
						<span className="absolute inset-0 -z-10">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'https://i.scdn.co/image/ab67706c0000da84e581815a92946c295b02b936'}
								className="absolute inset-0 h-full w-full bg-black  object-cover object-center brightness-50"
								alt="Album cover art"
							/>
						</span>

						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>

							<div className="space-y-0.5">
								<h2 className="font-title font-bold">
									<span className="font-medium">playlist:</span>early travel
								</h2>

								<p className="text-sm">because you had to get a 3 hour bus journey in the early hours</p>
							</div>
						</span>
					</Link>
				) : (
					<Link
						href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
						target="_blank"
						rel="noopener noreferrer"
						className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
					>
						<span className="absolute inset-0 -z-10">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={`${lanyard.spotify.album_art_url}?cache=${Date.now()}`}
								className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
								alt="Album cover art"
							/>
						</span>

						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>

							<span>
								<h2>
									<span
										className="mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
										aria-hidden
									/>{' '}
									Listening to{' '}
									<span className="font-bold" suppressHydrationWarning>
										{lanyard.spotify.song}
									</span>{' '}
									by{' '}
									<span className="font-bold" suppressHydrationWarning>
										{formatList(lanyard.spotify.artist.split('; '), 'conjunction')}
									</span>
									.
								</h2>
							</span>
						</span>
					</Link>
				)}
			</CardHoverEffect>

			<div className="group relative col-span-3 flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-2xl">
				<Image
					src={props.map}
					className="bg-black"
					fill
					alt="A map locating roughly where I am right now"
					style={{objectFit: 'cover'}}
				/>

				<div className="absolute top-1/2 left-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
					<div aria-hidden className="absolute translate-y-[14px]">
						<span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
					</div>

					<Image
						src={me}
						alt="Photo of me above a map of my current location"
						height={60}
						width={60}
						className="h-15 w-15 z-20 rounded-full border-2 border-black transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
					/>

					<p className="rounded-full bg-white/10 pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md">
						📍 {props.location}
					</p>
				</div>
			</div>
		</main>
	);
}

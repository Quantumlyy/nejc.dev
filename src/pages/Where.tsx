import React from 'react';
import Repo from '../components/Repo';
import { config } from '../config';
import PageWrapper from './PageWrapper';
/*
import Co from "../components/Co";
import styled from "styled-components";
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';
*/

const Where = () => {
	const repoElements = config.repos.map(({ name, url, lang, description }, i) => (
		<Repo key={i} name={name} url={url} primaryLanguage={lang} description={description} />
	));

	return (
		<PageWrapper>
			<h3>Open-source Projects</h3>
			<div>{repoElements}</div>
		</PageWrapper>
	);
};

/*

<h1>Where I've Done It</h1>
<h3>Companies</h3>
<CoWrapper>
  <Co url="https://hiven.io" name="Hiven" iconReference={HivenAppIcon} tagline="Consumer social" role={"Founder & Developer"} what={"I founded Hiven back in 2019 to make it easy for anyone create premium groups."}/>
  <Co url="https://giggl.app" name="Giggl" iconReference={GigglAppIcon} tagline="Consumer social" role={"Co-founder & Developer"} what={"I helped design and create the backend, realtime infrastructure and the frontend."}/>
  <Co url="https://honk.me" name="Honk" iconReference={HonkAppIcon} tagline="Consumer social" role={"Backend Engineer"} what={"I designed and implemented the realtime infrastructure at Honk using Elixir."}/>
</CoWrapper>

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

*/

export default Where;

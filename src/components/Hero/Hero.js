import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				Hari Bahadur's Portfolio
			</SectionTitle>
			<SectionText>
				Ram Bahadur is an aspiring web developer from Nepal, He loves coding as
				much as he loves eating momos and drinking coca-cola.
			</SectionText>
			<Button onClick={() => (window.location = "#about")}>Know More</Button>
		</LeftSection>
	</Section>
);

export default Hero;

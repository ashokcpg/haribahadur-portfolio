import React from "react";
import { DiFirebase, DiReact, DiIllustrator } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id='technologies'>
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			Hari Bahadur has work with range of technologies in the web development
			world. From Backend to Design.
		</SectionText>
		<List>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiIllustrator size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Tools Like Figma and Illustrator
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;

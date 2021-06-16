import React from "react";

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
	<div>
		<Section nopadding id='projects'>
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
		</Section>
		<GridContainer>
			{projects.map(
				({ id, image, title, description, tags, source, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<Hr />
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks href={visit}>Code</ExternalLinks>
							<ExternalLinks href={source}>Source</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</div>
);

export default Projects;

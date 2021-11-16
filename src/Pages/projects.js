import React from 'react';
import "./projects.css";

import Footer from '../Components/Footer/Footer';
import PortfolioCards from '../Components/Images/PortfolioCards/PortfolioCards';

const Projects = () => {
return (
	<>
		<div className="projectHeader">
			<h1 className="headerText">Portfolio</h1>

			<p className="subHeader">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>

		<body>
			<div className="releasedProjectsBackground">
				
				<div className="releasedProjectsHeader">
					<h1>Released Projects</h1>
				</div>

				<div className="releasedProjectsContainer">
					{/* <div className="cardContainer">
						<PortfolioCards 
							title = "Template"
							body = "This is a template"
							link = "template"
							linkText = "more details"
							imageLink = "./Images/tempImage.png"
						/>
					</div> */}

					<div className="cardContainer">
						<PortfolioCards 
							title = "Full Swing Golf Simulator"
							body = "Worked on processing and tweaking satellite data to create terrain for courses, UI/UX implementation, parsing camera data for replay, and general programming."
							link = "FullSwingGolfSimulator"
							linkText = "More Details"
							imageLink = "./Images/Projects/FullSwingGolfSimulator.jpg"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "Full Swing Launch Monitor"
							body = "Implemented UI/UX for general navigation and to display data recieved from sensor on phone application."
							link = "FullSwingLaunchMonitor"
							linkText = "More Details"
							imageLink = "./Images/Projects/Launch Monitor.jpg"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "PokerGo Holdem"
							body = "Worked on restructuring existing engine to work with new rules, and assets. Also worked on implementing UI/UX and VFX as well as a lot of bug fixing caused by issues with oudated engine."
							link = "PokerGoHoldEm"
							linkText = "More Details"
							imageLink = "./Images/Projects/PokerGOHoldEm.png"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "Osiris New Dawn"
							body = "Focused on fixing game breaking issues after core system restructuring, new system additions and new asset introductions."
							link = "OsirisNewDawn"
							linkText = "More Details"
							imageLink = "./Images/Projects/OsirisNewDawn.jpg"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "Maelstrom"
							body = "Worked on restructuring UI/UX for Controller support. Also worked on fulfilling requirement needed for console release."
							link = "Maelstrom"
							linkText = "More Details"
							imageLink = "./Images/Projects/Maelstrom.jpg"
						/>
					</div>
				</div>
			</div>
			<div className="personalProjectsBackground">

				<div className="personalProjectsHeader">
					<h1>Personal Projects</h1>
				</div>

				<div className="personalProjectsContainer">

					{/* <div className="cardContainer">
						<PortfolioCards 
							title = "Template"
							body = "This is a template"
							link = "template"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div> */}

					<div className="cardContainer">
						<PortfolioCards 
							title = "TPMS"
							body = "a third person mech shooter that is unamed with switchable loadouts that I have been working on off and on for years."
							link = "TPMS"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "FPPCH"
							body = "A first person point and click horror game where everything moves when you do"
							link = "FPPCH"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "Bumper Balls - Minigames project"
							body = "a simple minigame in which you try to push simple AIs off a platform."
							link = "BumperBalls"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>

					<div className="cardContainer">
						<PortfolioCards 
							title = "Cowboy Shooter - Minigames Project"
							body = "A simple shooter where you only have one bullet."
							link = "CowboyShooter"
							linkText = "More Details"
							imageLink = "./Images/tempImage.png"
						/>
					</div>
					
				</div>
			</div>
			
			
			<Footer />
		</body>
	</>
);};

export default Projects;

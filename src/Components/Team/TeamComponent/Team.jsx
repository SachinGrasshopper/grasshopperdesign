import React, { useState } from 'react';
// import { Transition, animated } from 'react-spring/renderprops';
import EmployeeCard from './EmployeeCard';
import TeamInfoPopup from './TeamInfoPopup';

function Team() {
	const [ popup, setpopup ] = useState(false);
	const [ emp_popup, setEmp_popup ] = useState(null);

	return (
		<React.Fragment>
			<div className="container-fluid" style={{ backgroundColor: '#ececec', padding: '3.5em 0' }}>
				<h2 className="gh_green_txt center font_roboto_condensed">Meet the Insects</h2>

				<div className="center font_roboto_condensed" style={{ maxWidth: '400px', margin: '0 auto' }}>
					<p>
						We Grasshopper is a multidisciplinary team of Visual Designers, Web Designers and Brand
						Strategists. We are collaborative, flexible, responsive, passionate and grounded in nature. We
						may different in color, look, nature and thinking process but when it comes to complete a
						project we have a unique nature. Deadline are our ideal friends and we never make our friends
						down.
					</p>
					<p>
						We maybe small but mighty, our creative team focuses on getting to know our clients to ensure we
						are bringing their vision to life, while also staying on time and budget too…
					</p>
				</div>

				<p className="center" style={{ padding: '1em 0' }}>
					<span
						className="gh_green_txt"
						style={{
							padding: '10px 15px',
							border: '2px solid #95d600',
							borderRadius: '5px',
							fontSize: '1.5em'
						}}
					>
						Brand is Unique
					</span>
				</p>

				<div className="container">
					<div
						style={{
							backgroundColor: '#95d600',
							borderRadius: '5px',
							padding: '20px 15px'
						}}
					>
						<p className="no-margin center font_roboto_condensed">
							We know perfectly that our story isn't your story and your story isn't ours. In fact, every
							brand has its own distinctive circumstances that are at the core of any story or brief to be
							told and the product be sold. So, does yours, and we love it to bring it to life. We create
							your brand, a more positive brand.
						</p>
					</div>
				</div>
			</div>

			<div className="container-fluid" style={{ backgroundColor: '#fff' }}>
				<div className="employees container">
					<EmployeeCard imgName="emp_sasikumar" empName="Sasikumar N" empDesignation="Director" />

					<EmployeeCard imgName="emp_sandhya" empName="Sandhya Sasikumar" empDesignation="Director" />
				</div>

				<div className="employees container">
					<EmployeeCard
						imgName="emp_ceo"
						empName="Anupriya Sasikumar"
						empDesignation="Co-Founder & CEO"
						empInfo="Don't touch my Shadow and Leo"
						seeMoreBtn
						openTeamPopup={(empName) => {
							setpopup(true);
							setEmp_popup(empName);
						}}
					/>

					<EmployeeCard
						imgName="emp_abhi"
						empName="Abhiraj Perampil"
						empDesignation="Co-Founder & Creative Director"
						empInfo="On a diet!"
						seeMoreBtn
						openTeamPopup={(empName) => {
							setpopup(true);
							setEmp_popup(empName);
						}}
					/>
				</div>

				<div className="employees container">
					<EmployeeCard
						imgName="emp_haneef"
						empName="Haneef Muhammad"
						empDesignation="Manager Finance & Operations"
						empInfo="Wanna learn photoshop"
						seeMoreBtn
						openTeamPopup={(empName) => {
							setpopup(true);
							setEmp_popup(empName);
						}}
					/>

					<EmployeeCard imgName="emp_sachin" empName="Sachin S Nair" empDesignation="Web Developer" />

					<EmployeeCard empName="Achuthananda Varma" empDesignation="VFX Artist" />

					<EmployeeCard empName="Althaf Ahammed K" empDesignation="Jr. Graphic Designer" />
				</div>

				<hr className="card_divider" />

				<div className="employees container">
					<EmployeeCard
						imgName="emp_shadow"
						empName="Shadow"
						empDesignation="Team Booster"
						empInfo="Bow Bow"
					/>
				</div>
			</div>

			{/* <Transition items={popup} from={{ opacity: 0 }} entry={{ opacity: 1 }} leave={{ opacity: 0 }}>
				{(show) =>
					show &&
					((props) => (
						<animated.div style={props}>
							<TeamInfoPopup closeTeamPopup={() => setpopup(false)} />
						</animated.div>
					))}
			</Transition> */}

			{popup && (
				<TeamInfoPopup
					closeTeamPopup={() => {
						setpopup(false);
						setEmp_popup(null);
					}}
					emp_popup={emp_popup}
				/>
			)}
		</React.Fragment>
	);
}

export default Team;

import React, { useState } from 'react';
// import { publicpath } from './../../../Helpers/publicpath';

const team_path = '/assets/images/team';

const showEmpInfo = {
	opacity: 1,
	bottom: '0px'
};

const hideEmpInfo = {
	opacity: 0,
	bottom: '-250px'
};

function EmployeeCard(props) {
	const [ state, setstate ] = useState(true);
	const [ empInfo, setEmpInfo ] = useState(false);

	const getImage = (imgName) => {
		if (window.innerWidth <= 992)
			return <img src={`${team_path}/${imgName}_gif.gif`} alt="" className="emp_gif show-on-small" />;

		if (state) {
			return <img src={`${team_path}/${imgName}.jpg`} alt="" className="emp_avatar hide-on-small-only" />;
		} else {
			return <img src={`${team_path}/${imgName}_gif.gif`} alt="" className="emp_gif show-on-small" />;
		}
	};

	return (
		<div
			className="employee_card"
			onMouseEnter={() => setstate(false)}
			onMouseLeave={() => {
				setstate(true);
				setEmpInfo(false);
			}}
			onClick={() => setEmpInfo(true)}
		>
			{props.imgName && getImage(props.imgName)}

			<div className="emp_info_box font_roboto_condensed center" style={empInfo ? showEmpInfo : hideEmpInfo}>
				{props.empName && <p className="emp_name">{props.empName}</p>}
				<hr className="emp_divider" />
				{props.empDesignation && <p className="emp_designation">{props.empDesignation}</p>}
				{props.empInfo && <p className="emp_info">{props.empInfo}</p>}
				{props.seeMoreBtn && (
					<button type="button" className="emp_see_more" onClick={() => props.openTeamPopup(props.imgName)}>
						See More
					</button>
				)}
			</div>
		</div>
	);
}

export default EmployeeCard;

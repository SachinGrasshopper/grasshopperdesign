import React from 'react';
import { Lightbox } from './../../../StyledComponents';
import { popup_info_data } from './../popup_info_data';

const svgPath = '/assets/images/team';

function TeamInfoPopup(props) {
	return (
		<Lightbox>
			<div className="t_member_container">
				<div className="t_member_row row no-margin">
					<span className="valign_wrapper t_member_close" onClick={props.closeTeamPopup}>
						<i className="material-icons tiny">close</i>
					</span>

					<div className="t_member_avatar col s12 m4">
						<img src={`${svgPath}/${popup_info_data[props.emp_popup].svg}`} alt="" />
					</div>
					<div className="t_member_info col s12 m8">
						{popup_info_data[props.emp_popup].empInfo.map((info) => <p>{info}</p>)}
					</div>
				</div>
			</div>
		</Lightbox>
	);
}

export default TeamInfoPopup;

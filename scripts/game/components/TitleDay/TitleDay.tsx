/** @format */

import { TitleDayProps } from "./types"

import * as S from "./UI"
import { isMobile } from "react-device-detect"

export const TitleDay = ({
	year,
	day,
	title,
	AOCUrl,
	onClose,
}: TitleDayProps) => {
	return (
		<S.Container>
			<div>
				<a href={AOCUrl} target="_blank">
					<>
						{year} | jour {day}
					</>
					{!isMobile && (
						<>
							{" "}
							: <span>{title}</span>
						</>
					)}
				</a>
			</div>

			<div className="close" onClick={onClose}>
				Fermer
			</div>
		</S.Container>
	)
}

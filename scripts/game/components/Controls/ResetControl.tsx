/** @format */

import { ResetControlProps } from "./types"

import { Action } from "../Action"
import * as S from "./UI"

export const ResetControl = ({ onChange }: ResetControlProps) => {
	return (
		<S.Line>
			<label>RĂ©initialiser : </label>
			<span>
				<Action onClick={onChange} value="[Reset]" />
			</span>
		</S.Line>
	)
}

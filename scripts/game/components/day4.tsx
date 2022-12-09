/** @format */
import { useState } from "react"
import styled from "styled-components"

import { useAnim, prepareViewsHelpers } from "./hooks"
import { generateViews } from "../core/day4"

import Stats from "./Stats"

const Game = styled.pre`
	margin: 0;
`

const Animation = () => {
	const [speed, setSpeed] = useState<number>(20)
	const [dataSize, setDataSize] = useState<number>(20)
	const [reload, setReload] = useState<number>(0)
	const { HTML, stats } = useAnim({
		viewsFn: () => prepareViewsHelpers(() => generateViews(25, dataSize), true),
		speed,
		reload,
		dataSize,
	})

	return (
		<>
			<Game dangerouslySetInnerHTML={{ __html: HTML }} />
			<Stats
				stats={stats}
				speed={speed}
				sizeData={dataSize}
				onChangeSpeed={setSpeed}
				onReload={setReload}
				onChangeSize={setDataSize}
			/>
		</>
	)
}

export default Animation

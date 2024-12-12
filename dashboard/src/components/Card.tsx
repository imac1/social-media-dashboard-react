import React from "react";

export default function Card() {
	return (
		<>
			<div
				className="flex flex-col px-16 py-6 border-t-4 border-t-facebook dark:text-whiteText rounded-lg
        bg-darkDesaturatedBlueCardBG text-whiteText items-center space-y-2"
			>
				<div className="div flex flex-row gap-1 items-center">
                <span className="material-icons rounded text-5xl text-facebook">
					facebook
				</span>
                <h4 className="text-sm text-desaturatedBlueText">@nathan</h4>
                </div>
               <div className="flex flex-col items-center">
               <h1 className="text-white text-5xl font-bold">1675</h1>
               <p className="uppercase text-desaturatedBlueText tracking-[3px] text-sm">followers</p>
               </div>
               <div className="flex flex-row text-xs text-limeGreen items-center">
            
                <span className="material-icons">arrow_drop_up</span>
                <span className="font-bold ">12</span>
                <span className="font-bold ml-1">Today</span>
               </div>

			</div>
		</>
	);
}

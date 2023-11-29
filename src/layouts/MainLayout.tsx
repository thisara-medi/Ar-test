import { FC } from "react";

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = () => {
	return (
		<div className="p-2 flex flex-col gap-4">
			{/** top 3 lines */}
			<div className="flex flex-col gap-2">
				<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
				<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
				<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
			</div>

			{/** middle image and side images */}
			<div className="grid grid-cols-5 w-full gap-2">
				{/** left big picture */}
				<div className="flex flex-col col-span-3 gap-2">
					<div className="bg-gray-200 h-[200px] rounded-md col-span-3"></div>
					<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
					<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
					<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
				</div>

				{/** right smol pictures and list */}
				<div className="flex flex-col gap-2 col-span-2">
					<div className="col-span-2 grid grid-cols-2 gap-2 h-[200px]">
						<div className="bg-gray-200 rounded-md w-full"></div>
						<div className="bg-gray-200 rounded-md w-full"></div>
						<div className="bg-gray-200 rounded-md w-full"></div>
						<div className="bg-gray-200 rounded-md w-full"></div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
						<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
					</div>
				</div>
			</div>

			{/** bottom list  */}
			<div className="grid grid-cols-5 w-full gap-2">
				{/** left big list */}
				<div className="flex flex-col col-span-3 gap-2">
					<div className="w-full grid grid-cols-3 gap-2 h-[100px]">
						{/** picture */}
						<div className="h-full col-span-1 bg-gray-200 rounded-md"></div>
						<div className="col-span-2 flex flex-col gap-2">
							<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-4/5"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-[95%]"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
							<div className="h-2 rounded-full w-1/2"></div>
						</div>
					</div>
					<div className="w-full grid grid-cols-3 gap-2 h-[100px]">
						{/** picture */}
						<div className="h-full col-span-1 bg-gray-200 rounded-md"></div>
						<div className="col-span-2 flex flex-col gap-2">
							<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-4/5"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-[95%]"></div>
							<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
							<div className="h-2 rounded-full w-1/2"></div>
						</div>
					</div>
				</div>

				{/** right smol list */}
				<div className="flex flex-col gap-2 col-span-2">
					<div className="flex flex-col col-span-3 gap-2">
						<div className="w-full grid grid-cols-2 gap-2 h-[50px]">
							{/** picture */}
							<div className="h-full col-span-1 bg-gray-200 rounded-md"></div>
							<div className="col-span-1 flex flex-col gap-2">
								<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
							</div>
						</div>
						<div className="w-full grid grid-cols-2 gap-2 h-[50px]">
							{/** picture */}
							<div className="h-full col-span-1 bg-gray-200 rounded-md"></div>
							<div className="col-span-1 flex flex-col gap-2">
								<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
							</div>
						</div>
						<div className="w-full grid grid-cols-2 gap-2 h-[50px]">
							{/** picture */}
							<div className="h-full col-span-1 bg-gray-200 rounded-md"></div>
							<div className="col-span-1 flex flex-col gap-2">
								<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
							</div>
						</div>
						<div className="w-full grid grid-cols-2 gap-2 h-[50px]">
							{/** picture */}
							<div className="h-full col-span-1 bg-gray-200 rounded-md"></div>
							<div className="col-span-1 flex flex-col gap-2">
								<div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
								<div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;

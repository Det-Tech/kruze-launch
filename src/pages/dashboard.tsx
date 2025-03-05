// import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom"

import Cluster from "../assets/Cluster.png"
import play from "../assets/play.png"
import sui from "../assets/SUI LOGO.png"
import phantom from "../assets/Phantom-Logo-Purple.png"
import person from "../assets/health/3333.png"
import person1 from "../assets/health/4444.png"
import person2 from "../assets/health/5555.png"
import person3 from "../assets/health/6666.png"
import person4 from "../assets/health/7777.png"

import suiPlay from "../assets/gaming/3.png"
import vitalment from "../assets/gaming/2.png"
import staking from "../assets/staking/1.png"
import nft from "../assets/nft/1.png"
import roadMap from "../assets/roadmap/1.png"
import VTMT from "../assets/vtmt/1.png"
import marketPlace from "../assets/marketPlace/1.png"
import about from "../assets/about/1.png"

import telegram from "../assets/contact/telegram.png"
import twitter from "../assets/contact/x.png"
import discord from "../assets/contact/discord.png"
import tiktok from "../assets/contact/tiktok.png"
import facebook from "../assets/contact/facebook.png"
import instagram from "../assets/contact/instagram.png"
import youtube from "../assets/contact/youtube.png"

const LandingPage = () => {

	const videoId = "CgkZ7MvWUAA"; // Replace with your video ID
	const navigate = useNavigate();

	return (
		<>
			<section className={`w-full text-white mt-[60px] max-w-[1158px] rounded-2xl flex justify-between flex-row px-[22px] py-[59px] background gap-[12px] max-lg:flex-col max-lg:items-center`}>
				{/* Main Content */}
				<div className="flex w-[50%] flex-col items-center max-lg:w-full max-lg:order-2 max-lg:mt-[30px]">
					<div className="flex items-start justify-start w-full text-start font-normal text-[24px] leading-[29.05px] flex-col gap-10">
						<span className="text-[24px] leading-[29.05px]">
							Welcome to Vitalment – Mental health affects us all. 1 in 5 struggle, and we’re here to change that while helping the other 4 stay well.
						</span>
						<span className="text-[24px] leading-[29.05px]">
							Our Innovation will drive real impact—globally, for everyone!
						</span>
					</div>
					<h1 className="font-extrabold text-[48px] leading-[57.6px] text-center exo-2 mt-[60px]">
						<span className=" font-normal text-[48px] leading-[57.6px]">
							ICO & PRE SALE <span className="!font-extralight">is</span> LIVE!
						</span>
					</h1>
					<button
						className=" bg-[#FFE100] w-[300px] h-[64px] rounded-2xl mt-[10px] flex justify-center items-center text-black exo-2 leading-[29.05px] !font-bold text-[24px] underline cursor-pointer text-center"
						onClick={() => navigate("/pre-sale")}
					>
						<span className="!font-black">Buy Vitalment</span>
					</button>
					<span className="font-normal text-[36px] leading-[43.57px] text-white mt-[65px]">
						Accepted Wallets
					</span>
					<div className="flex flex-row justify-between gap-[4rem] mt-[15px] max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-[1rem] max-[500px]:mt-[4rem]">
						<img src={sui} alt="SUI" className="max-[500px]:w-[120px]" />
						<img src={phantom} alt="Phantom" />
					</div>
				</div>
				<img src={Cluster} alt="cluster" className="w-[50%] h-fit max-lg:w-full max-lg:order-1 max-lg:max-w-[400px]" />
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between flex-col px-[28px] py-[31px] background">
				<h1 className="exo-2 leading-[57.6px] font-semibold text-[48px] text-white">
					Revolutionizing Mental Health Through Innovation
				</h1>
				<div className="mt-[22px] flex flex-row w-full gap-[20px] max-lg:flex-col">
					<p className="font-normal text-[20px] leading-[24.2px] text-white w-[40%] text-start max-lg:order-2 max-lg:w-full">
						At Vitalment, we are on a mission to revolutionize mental health through innovation, technology, and community-driven solutions.
						With 1 in 5 people struggling with mental health challenges and the other 4 in 5 at risk, we believe it's time for a change.
						Our goal is to disrupt the system, eliminate barriers, and create real-world impact on a global scale.<br />
						What We Stand For <br />
						Vitalment is built on the belief that mental well-being should be accessible, engaging, and rewarding.
						We are creating a decentralized ecosystem where individuals can improve their mental health, gain financial empowerment, and connect with a supportive community.<br />
						Join the Movement<br />
						We are more than just a platform—we are a global movement working toward a world where mental well-being is a priority for all.
						Whether you're here to play, stake, collect, or connect, you are part of something bigger.<br />
						Together, we can disrupt the system and create lasting change.
					</p>
					<div className="flex flex-col pt-[69px] w-[60%] max-lg:order-1 max-lg:w-full">
						<h2 className="exo-2 leading-[38.4px] font-bold text-[32px] text-white">
							Accessible, Engaging & Rewarding!
						</h2>
						<div className="mt-[20px] flex flex-col w-full gap-[6px]">
							<div className="w-full flex justify-between gap-[6px]">
								<img src={person} alt="Person using phone" className="object-cover w-[33%] h-auto" />
								<img src={person1} alt="Person on transit" className="object-cover w-[33%] h-auto" />
								<img src={person2} alt="Person smiling at phone" className="object-cover w-[33%] h-auto" />
							</div>
							<div className="flex w-full justify-between gap-[6px]">
								<img src={person3} alt="Person using laptop" className="object-cover col-span-2 md:col-span-1 w-[33%] h-auto" />
								<img src={person4} alt="Group walking in sunset" className="col-span-2 md:col-span-3 object-cover w-[67%] h-auto" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between flex-col px-[22px] py-[29px] background">
				<div className="flex flex-col exo-2 font-extrabold text-[48px] leading-[57.6px] items-center">
					<span>
						<strong>Why Sui?</strong>
					</span>
					<span>
						Speed, Security & Scalability for Real Impact
					</span>
				</div>
				<div className="flex flex-row gap-[20px] mt-[70px] max-lg:flex-col">
					<div className="flex flex-col items-center">
						{/* Video Card */}
						<div className="relative w-[710px] max-w-full h-[439px] max-h-[439px] rounded-lg overflow-hidden border-2 border-white shadow-lg bg-[#0c0732]">
							{/* Video Thumbnail */}
							<img
								src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
								alt="YouTube Video Thumbnail"
								className="w-full h-auto"
							/>

							{/* Play Button */}
							<button
								className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition"
								onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
							>
								<img src={play} alt="play" width={70} className=" rounded-xl cursor-pointer" />
							</button>
						</div>
					</div>
					<p className="text-start font-normal text-[20px] leading-[24.2px]">
						We chose Sui for its unmatched speed, low fees, and scalability—essential for a global movement like Vitalment.
						Its parallel execution model prevents congestion, while the object-based architecture enables advanced NFTs and tokenized utilities.
						Built on Move, Sui enhances security, ensuring a safe and efficient ecosystem.
						Unlike Ethereum’s high costs and Solana’s outages, Sui offers instant finality, reliability, and long-term growth potential.
						Backed by Mysten Labs and a strong developer community, it’s the ideal blockchain to power real-world impact in mental wellness.
					</p>
				</div>
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between flex-col px-[33px] pt-[35px] background">
				<h1 className="exo-2 font-bold text-[40px] leading-[48px] text-white">
					Gaming with Purpose: Play, Earn, and Improve Well-Being
				</h1>
				<div className="flex gap-[40px] flex-row mt-[47px] max-[1100px]:flex-col">
					<div className="flex flex-col gap-[22px] max-[1100px]:w-full max-[1100px]:items-center">
						<div className="flex flex-col items-center w-[415px] min-w-[415px]">
							{/* Video Card */}
							<div className="relative w-full max-w-full h-[233px] max-h-[233px] rounded-lg overflow-hidden border-2 border-white shadow-lg bg-[#0c0732]">
								{/* Video Thumbnail */}
								<img
									src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
									alt="YouTube Video Thumbnail"
									className="w-full h-auto"
								/>

								{/* Play Button */}
								<button
									className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition"
									onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
								>
									<img src={play} alt="play" width={70} className=" rounded-xl cursor-pointer" />
								</button>
							</div>
						</div>
						<div className="flex flex-col items-center w-[415px] min-w-[415px] ">
							{/* Video Card */}
							<div className="relative w-full max-w-full h-[233px] max-h-[233px] max-[1100px]:justify-center max-[1100px]:w-full rounded-lg overflow-hidden border-2 border-white shadow-lg bg-[#0c0732]">
								{/* Video Thumbnail */}
								<img
									src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
									alt="YouTube Video Thumbnail"
									className="w-full h-auto"
								/>

								{/* Play Button */}
								<button
									className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition"
									onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
								>
									<img src={play} alt="play" width={70} className=" rounded-xl cursor-pointer" />
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col grow">
						<p className="font-normal text-[20px] mt-[20px] leading-[24.2px] text-white text-start">
							Vitalment is redefining gaming with purpose.
							Our ecosystem goes beyond entertainment—it’s designed to enhance mental well-being while rewarding players.
							Through engaging, cognitive-based games, users can challenge their minds, reduce stress, and earn real value in the form of VTMT and other digital rewards.
							This ecosystem will seamlessly integrate with our marketplace, allowing users to trade, purchase, or utilize in-game assets.
							As we expand, our goal is to bridge the gap between gaming and mental wellness, offering experiences that are not just fun but also empowering, rewarding, and beneficial for mental health.
						</p>
						<div className="flex flex-row w-full justify-between items-center">
							<img src={vitalment} alt="vitalment" height={157} className="h-[157px]" />
							<img src={suiPlay} alt="suiPlay" />
						</div>
					</div>
				</div>
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between items-center flex-col px-[91px] pt-[30px] pb-[80px] background">
				<h1 className="exo-2 font-bold text-[48px] leading-[57.6px] text-center">
					Staking
				</h1>
				<p className="font-normal text-[20px] leading-[24.2px] mt-[30px] text-start">
					Staking in the Vitalment ecosystem empowers users to earn passive rewards while supporting the network’s long-term growth.
					By locking VTMT, holders can gain access to exclusive benefits, including increased earning potential, marketplace perks, and priority access to future ecosystem features.
					Our staking model is designed for sustainability, ensuring fair rewards without excessive inflation. Whether you’re an active participant or a long-term believer in Vitalment’s mission, staking offers a way to grow your holdings while contributing to the future of mental wellness and innovation.
				</p>
				<img src={staking} alt="staking" width={900} height={250} className="mt-[70px]" />
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between items-center flex-col pl-[20px] pr-[59px] pt-[47px] pb-[54px] background">
				<h1 className="exo-2 font-bold text-[48px] leading-[57.6px] text-center">
					NFT’s
				</h1>
				<div className="w-full flex flex-row justify-between gap-[15px] mt-[31px] max-lg:flex-col max-lg:items-center max-lg:w-full">
					<p className="text-start font-normal text-[20px] leading-[24.2px] text-white w-[33.2%] max-lg:w-full max-lg:text-center">
						Vitalment NFTs are more than just collectibles—they unlock real utility within our ecosystem.
						From granting access to exclusive marketplace features to enhancing gaming rewards, our NFTs serve a purpose beyond ownership.
						They can also be staked to earn VTMT, providing passive rewards while contributing to the ecosystem’s growth.
						Whether it's Marketplace Seller NFTs that enable trading privileges or unique in-game assets that offer special benefits, each NFT is designed for real-world impact.
						As we expand, our NFT ecosystem will continue to evolve, offering new ways for users to engage, earn, and be part of a movement that blends technology with mental well-being.
					</p>
					<img src={nft} alt="nft" className="grow w-[66.8%] h-fit max-lg:w-[500px] max-lg:mt-[50px]" />
				</div>
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex items-center justify-center background">
				<img src={roadMap} alt="roadMap" className="w-full h-fit" />
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between items-center flex-col pl-[78px] pr-[20px] pt-[44px] pb-[15px] background max-lg:px-[20px]">
				<h1 className="exo-2 font-bold text-[48px] leading-[57.6px] text-center text-white">
					$VTMT - Tokenomics
				</h1>
				<div className="flex w-full gap-[42px] flex-row justify-between mt-[70px] max-lg:flex-col max-lg:w-full max-lg:items-center">
					<div className="flex flex-col gap-[20px] w-[50%] max-lg:w-full max-lg:items-center">
						<img src={VTMT} alt="VTMT" className="max-lg:w-[400px]" />
						<p className="exo-2 font-bold text-[20px] leading-[24px] text-white">
							700 Million VTMT - Initial Circulating Supply at Launch.
						</p>
						<p className="exo-2 font-bold text-[20px] leading-[24px] text-white">
							Total Supply - 5 Billion VTMT minted over 8 to 10 years.
						</p>
					</div>
					<div className="flex flex-col w-[50%] items-start max-lg:w-[80%]">
						<h3 className="flex font-medium text-[32px] leading-[38.73px] text-start">
							Initial Circulating Supply<br />
							(At Launch)
						</h3>
						<p className="flex font-normal text-[16px] leading-[19.36px] mt-3 text-start">
							At the Token Generation Event (TGE), 700 million VTMT will be available in circulation. This comes from the following allocations: <br /><br />

							COGN Holders: 166.6M VTMT (33.3% unlocked at launch, remaining released over 2 months).<br />
							Liquidity Pool: 250M VTMT (LP@41% on release for smooth trading).<br />
							Presale / ICO: 133.3M VTMT (33.3% unlocked at launch, remaining released over 2 months).<br />
							Marketing & Growth: 100M VTMT (Support promotions).<br />
							Community Incentives: 50M VTMT<br /><br />

							***Total supply is held and not minted as a backing for our ecosystem.
							If we end up not needing these coins, they will not be minted.
							Community/ DAO vote will take place before any new coins are released.
						</p>
					</div>
				</div>
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between items-center flex-col pt-[31px] pb-[95px] px-[20px] background">
				<h1 className="exo-2 font-bold text-[48px] leading-[57.6px] text-center">
					Vitalment Marketplace
				</h1>
				<div className="mt-10 relative flex justify-center items-center">
					<img src={marketPlace} alt="marketPlace" className="w-full h-full" />
					<h1 className=" absolute top-[98px] text-center exo-2 font-bold text-[48px] leading-[57.6px]" style={{ textShadow: "7px 4px 4px #00000040" }}>
						Coming Soon!
					</h1>
				</div>
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between items-start flex-row pt-[60px] pb-[46px] pl-[20px] pr-[68px] background gap-[26px]">
				<div className="flex flex-col items-center justify-start h-full gap-[25px]">
					<h1 className="exo-2 font-semibold text-[48px] leading-[57.6px] text-center">
						Vitalment - About us
					</h1>
					<p className="font-normal text-[20px] leading-[24.2px] text-center">
						Vitalment is a Registered LLC Company in USA.
					</p>
					<p className="font-normal text-[20px] leading-[24.2px] text-start max-md:text-center">
						At Vitalment, we’re more than just a team—we’re a movement dedicated to reshaping mental health, financial empowerment, and decentralized innovation. Our leadership combines expertise in blockchain, AI, psychology, marketing, and community building, all united by a shared mission: to create a future where people have the tools and support to thrive.<br /><br /><br /><br />
						Tyler – CEO & FounderAn entrepreneur and NFT project creator, Tyler is the visionary architect of Vitalment’s growth strategy. His passion for mental health and blockchain innovation guides the platform’s evolution, ensuring every development aligns with the mission of helping others through technology.
					</p>
				</div>
				<img src={about} alt="about" className="w-[33%] h-fit max-lg:hidden" />
			</section>

			<section className="mt-[215px] w-full text-white max-w-[1158px] rounded-2xl flex justify-between items-center flex-col pt-[40px] pb-[90px] px-[30px] background gap-[57px] mb-[120px]">
				<h1 className="exo-2 font-semibold text-[48px] leading-[57.6px] text-center text-[#FFFFFF]">
					Contact Us
				</h1>
				<div className="w-[645px] rounded-[15px] flex flex-col items-center justify-between gap-[20px] px-[25px] pt-[10px] pb-[21px] bg-white">
					<h3 className="exo-2 font-bold text-[32px] leading-[38.4px] text-center text-[#00749E]">
						Join our Socials
					</h3>
					<div className="w-full grid grid-cols-7 gap-[25px]">
						<img src={telegram} alt="telegram" width={60} height={60} />
						<img src={discord} alt="discord" width={60} height={60} />
						<img src={twitter} alt="twitter" width={60} height={60} />
						<img src={tiktok} alt="tiktok" width={60} height={60} />
						<img src={instagram} alt="instagram" width={60} height={60} />
						<img src={facebook} alt="facebook" width={60} height={60} />
						<img src={youtube} alt="youtube" width={60} height={60} />
					</div>
				</div>
				<div className="w-full flex items-start flex-col justify-start gap-[20px]">
					<p className="w-full font-normal text-[20px] leading-[24.2px] flex flex-col items-start">
						<span>
							<strong>General Inquiries</strong> – contact@vitalment.xyz<br />
						</span>
						<span className="italic">
							For general questions and inquiries.
						</span>
					</p>
					<p className="w-full font-normal text-[20px] leading-[24.2px] flex flex-col items-start">
						<span>
							<strong>Hiring & Talent</strong> – talent@vitalment.xyz<br />
						</span>
						<span className="italic">
							For skilled professionals and potential hires who want to join Vitalment
						</span>
					</p>
					<p className="w-full font-normal text-[20px] leading-[24.2px] flex flex-col items-start">
						<span>
							<b>Marketing & PR</b> – marketing@vitalment.xyz<br />
						</span>
						<span className="italic">
							For collaborations, press inquiries, and promotional partnerships.
						</span>
					</p>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
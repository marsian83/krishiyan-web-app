import React from "react";
import { useState } from "react";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <section>
            <h2 className='mx-[34%] my-[0.6%] text-[#13490A] font-extrabold'>Maize</h2>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul className="flex items-center list-none flex-wrap gap-[0.8%] flex-row" role="tablist" >
                        <li className="flex-auto text-center">
                            <a className={
                                "flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 1 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab" href="#link1" role="tablist">General</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 2 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab" href="#link2" role="tablist">Variety</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 3 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab" href="#link3" role="tablist">Requirement</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 4 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab" href="#link4" role="tablist">Preperation</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 5 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab" href="#link5" role="tablist">Sowing</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 6 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(6);
                                }}
                                data-toggle="tab" href="#link6" role="tablist">Nutrition</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 7 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(7);
                                }}
                                data-toggle="tab" href="#link7" role="tablist">Irrigation</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 8 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(8);
                                }}
                                data-toggle="tab" href="#link8" role="tablist">InterCult</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 9 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(9);
                                }}
                                data-toggle="tab" href="#link9" role="tablist">Protection</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 10 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(10);
                                }}
                                data-toggle="tab" href="#link10" role="tablist">Harvest</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 11 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(11);
                                }}
                                data-toggle="tab" href="#link11" role="tablist">PostHarvest</a>
                        </li>
                        <li className="flex-auto text-center">
                            <a className={
                                " flex justify-center items-center text-xs font-extralight uppercase shadow-lg rounded h-[5vh] leading-normal " +
                                (openTab === 12 ? 'bg-[#526D4E] text-[#F3FFF1]' : "bg-[#05AB2A] text-[#F3FFF1]")
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(12);
                                }}
                                data-toggle="tab" href="#link12" role="tablist">Accidental</a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Collaboratively administrate empowered markets via
                                        plug-and-play networks. Dynamically procrastinate B2C users
                                        after installed base benefits.
                                        <br />
                                        <br /> Dramatically visualize customer directed convergence
                                        without revolutionary ROI.
                                    </p>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <p>
                                        Completely synergize resource taxing relationships via
                                        premier niche markets. Professionally cultivate one-to-one
                                        customer service with robust ideas.
                                        <br />
                                        <br />
                                        Dynamically innovate resource-leveling customer service for
                                        state of the art customer service.
                                    </p>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs


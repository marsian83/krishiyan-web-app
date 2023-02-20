import React from 'react'
import { useState } from 'react'
import Header from '../../Components/layouts/Header';

const Guide = () => {
    const [openTab, setOpenTab] = useState(1);
    const [inform, setInform] = useState(1);
    const [short, setShort] = useState(1);
    const [demon, setDemon] = useState(1);
    const [faq, setFaq] = useState(1);
    const [trouble, setTrouble] = useState(1);
    return (
        <div>
            <Header title="Help" subtitle="Guide" />
            <section className='flex flex-col justify-center items-center'>
                <div className='flex justify-center gap-x-4 w-full mt-[8vh] mb-[3vh]'>
                    <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#05AB2A] text-[#F3FFF1] rounded-md ${openTab === 1 ? 'bg-[#526D4E]' : 'bg-[#05AB2A]'}`} onClick={() => { setOpenTab(1) }}>Information</button>
                    <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#05AB2A] text-[#F3FFF1] rounded-md ${openTab === 2 ? 'bg-[#526D4E]' : 'bg-[#05AB2A]'}`} onClick={() => { setOpenTab(2) }}>Shortcuts</button>
                    <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#05AB2A] text-[#F3FFF1] rounded-md ${openTab === 3 ? 'bg-[#526D4E]' : 'bg-[#05AB2A]'}`} onClick={() => { setOpenTab(3) }}>Demonstrate</button>
                    <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#05AB2A] text-[#F3FFF1] rounded-md ${openTab === 4 ? 'bg-[#526D4E]' : 'bg-[#05AB2A]'}`} onClick={() => { setOpenTab(4) }}>FAQ</button>
                    <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#05AB2A] text-[#F3FFF1] rounded-md ${openTab === 5 ? 'bg-[#526D4E]' : 'bg-[#05AB2A]'}`} onClick={() => { setOpenTab(5) }}>Troubleshoot</button>
                </div>
                <div className='border border-black w-[95%] grid grid-rows-[1fr_14fr]'>
                    <div className='flex'>
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${inform === 1 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setInform(1) }}>Software Info</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${inform === 2 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setInform(2) }}>Device Info</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${inform === 3 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setInform(3) }}>Features Info</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${inform === 4 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setInform(4) }}>Confiq Info</button>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${short === 1 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setShort(1) }}>Shortcuts1</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${short === 2 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setShort(2) }}>Shortcuts2</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${short === 3 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setShort(3) }}>Shortcuts3</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${short === 4 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setShort(4) }}>Shortcuts4</button>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${demon === 1 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setDemon(1) }}>Demonstrate1</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${demon === 2 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setDemon(2) }}>Demonstrate2</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${demon === 3 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setDemon(3) }}>Demonstrate3</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${demon === 4 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setDemon(4) }}>Demonstrate4</button>
                        </div>
                        <div className={openTab === 4 ? "block" : "hidden"}>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${faq === 1 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setFaq(1) }}>FAQ1</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${faq === 2 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setFaq(2) }}>FAQ2</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${faq === 3 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setFaq(3) }}>FAQ3</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${faq === 4 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setFaq(4) }}>FAQ4</button>
                        </div>
                        <div className={openTab === 5 ? "block" : "hidden"}>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${trouble === 1 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setTrouble(1) }}>Troubleshoot1</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${trouble === 2 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setTrouble(2) }}>Troubleshoot2</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${trouble === 3 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setTrouble(3) }}>Troubleshoot3</button>
                            <button className={`w-[10vw] py-[0.2%] font-extralight text-center border border-[#000000] text-[#F3FFF1] rounded-md ${trouble === 4 ? 'bg-[#13490A]' : 'bg-[#05AB2A]'}`} onClick={() => { setTrouble(4) }}>Troubleshoot4</button>
                        </div>
                    </div>
                    <div className={openTab === 1 ? "block" : "hidden"}>
                        <div className={inform === 1 ? 'block' : 'hidden'}>
                            <p>Information/Software Info</p>
                        </div>
                        <div className={inform === 2 ? 'block' : 'hidden'}>
                            <p>Information/Device Info</p>
                        </div>
                        <div className={inform === 3 ? 'block' : 'hidden'}>
                            <p>Information/Features Info</p>
                        </div>
                        <div className={inform === 4 ? 'block' : 'hidden'}>
                            <p>Information/Confiq Info</p>
                        </div>
                    </div>

                    <div className={openTab === 2 ? "block" : "hidden"}>
                        <div className={short === 1 ? 'block' : 'hidden'}>
                            <p>Shortcuts/shortcut-1</p>
                        </div>
                        <div className={short === 2 ? 'block' : 'hidden'}>
                            <p>Shortcuts/shortcut-2</p>
                        </div>
                        <div className={short === 3 ? 'block' : 'hidden'}>
                            <p>Shortcuts/shortcut-3</p>
                        </div>
                        <div className={short === 4 ? 'block' : 'hidden'}>
                            <p>Shortcuts/shortcut-4</p>
                        </div>
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"}>
                        <div className={demon === 1 ? 'block' : 'hidden'}>
                            <p>Demonstrate/demonstrate-1</p>
                        </div>
                        <div className={demon === 2 ? 'block' : 'hidden'}>
                            <p>Demonstrate/demonstrate-2</p>
                        </div>
                        <div className={demon === 3 ? 'block' : 'hidden'}>
                            <p>Demonstrate/demonstrate-3</p>
                        </div>
                        <div className={demon === 4 ? 'block' : 'hidden'}>
                            <p>Demonstrate/demonstrate-4</p>
                        </div>
                    </div>
                    <div className={openTab === 4 ? "block" : "hidden"}>
                        <div className={faq === 1 ? 'block' : 'hidden'}>
                            <p>FAQ/FAQ - 1</p>
                        </div>
                        <div className={faq === 2 ? 'block' : 'hidden'}>
                            <p>FAQ/FAQ - 2</p>
                        </div>
                        <div className={faq === 3 ? 'block' : 'hidden'}>
                            <p>FAQ/FAQ - 3</p>
                        </div>
                        <div className={faq === 4 ? 'block' : 'hidden'}>
                            <p>FAQ/FAQ - 4</p>
                        </div>
                    </div>
                    <div className={openTab === 5 ? "block" : "hidden"}>
                        <div className={trouble === 1 ? 'block' : 'hidden'}>
                            <p>Troubleshoot/Troubleshoot - 1</p>
                        </div>
                        <div className={trouble === 2 ? 'block' : 'hidden'}>
                            <p>Troubleshoot/Troubleshoot - 2</p>
                        </div>
                        <div className={trouble === 3 ? 'block' : 'hidden'}>
                            <p>Troubleshoot/Troubleshoot - 3</p>
                        </div>
                        <div className={trouble === 4 ? 'block' : 'hidden'}>
                            <p>Troubleshoot/Troubleshoot - 4</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Guide
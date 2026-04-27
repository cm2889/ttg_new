"use client";
import { useState } from "react";
import Calendar from "./calender/Calendar";
import TimeSlots from "./calender/TimeSlots";
import CallInfo from "./calender/CallInfo";
import Container from "@/app/components/Container";
import InfoBadge from "@/app/components/InfoBadge";

const CallWithTtg = () => {
    const [selectedDate, setSelectedDate] = useState("");
    return (
        <section
            id="call-with-ttg"
            className="relative isolate overflow-hidden text-white md:py-15"
        >
            <Container>
                <div className="absolute inset-0 -z-10 bg-[#f5f7f8]" />
                <div className="relative z-10 w-full">
                    <div className="items-left justify-left flex flex-col">
                        <InfoBadge
                            icon="/icons/Badges/contact.png"
                            text="Contact Us"
                            className="w-fit"
                        />
                        <p className="font-clash text-left text-[25px] font-medium text-[#0b0b0b] md:text-[40px]">
                            Let’s building something great together
                        </p>
                    </div>
                    <div className="mt-10 rounded-xl bg-white">
                        <div className="mx-auto rounded-[28px] p-0 opacity-85 ring-2 ring-white/10 backdrop-blur-xs">
                            <div className="grid grid-cols-1 items-center gap-8 rounded-[28px] md:gap-12 lg:grid-cols-3">
                                <div className="flex justify-center rounded-l-[28px] px-5 lg:col-span-1">
                                    <CallInfo />
                                </div>
                                <div className="flex justify-center lg:col-span-1">
                                    <Calendar onDateSelect={setSelectedDate} />
                                </div>
                                <div className="flex justify-center lg:col-span-1">
                                    <TimeSlots selectedDate={selectedDate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CallWithTtg;

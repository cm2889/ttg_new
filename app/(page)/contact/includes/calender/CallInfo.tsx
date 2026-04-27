import React from "react";
import { MdAccessTime } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

const CallInfo = () => {
    return (
        <div className="flex h-full w-full flex-col items-start justify-between bg-white">
            <div className="space-y-1">
                {/* Logo and Title */}
                <div className="space-y-3">
                    <div className="flex h-59 items-center justify-center">
                        <div className="h-30 w-full border-b">
                            <Image
                                src="/icons/ttg_logo.png"
                                alt="TTG Logo"
                                width={80}
                                height={32}
                                className="h-10 w-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Call Details */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <MdAccessTime className="flex-shrink-0 text-2xl text-black" />
                        <span className="text-base text-black">30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdLanguage className="flex-shrink-0 text-2xl text-black" />
                        <span className="text-base text-black">
                            Strategy Call
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-8 text-sm leading-relaxed text-black">
                    Discuss your project goals with the Exoveon team. We&apos;ll
                    explore your idea, scope the project complexity, and suggest
                    the best plan for your product journey.
                </p>
            </div>

            {/* address */}
            <div className="flec-row mt-auto mb-15 flex gap-5 pt-10 text-black">
                <div>
                    <p className="font-clash text-[25px] font-medium text-[#0b0b0b] md:text-[16px]">
                        Contact us on
                    </p>
                    <p className="text-[12px]">+880 1711 000 000</p>
                    <p className="text-[12px]">yourmail@email.com</p>
                </div>
                <div>
                    <p className="font-clash text-[25px] font-medium text-[#0b0b0b] md:text-[16px]">
                        Find us
                    </p>
                    <p className="text-[12px] leading-relaxed text-black">
                        6391 Elgin St. Celina, Delaware 10299
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallInfo;


import { motion } from "framer-motion";
import { useState } from "react";

type Tab = {
    id: string
    label: string
}

const tabs: Tab[] = [
    { id: "world", label: "Dashboard" },
    { id: "ny", label: "Leads" },
    { id: "business", label: "Site Visits" }
];

const TabUiMain = () => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
        <div  >
            <div className="flex space-x-1 py-4 !font-[Poppins]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? "" : "hover:text-gray-900"
                            } relative rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 outline-sky-400 transition focus-visible:outline-2`}
                    // style={{
                    //   WebkitTapHighlightColor: "transparent",
                    // }}
                    >

                        <span className={`z-10 ${activeTab === tab.id && 'text-white'}`}>
                            {tab.label}
                        </span>

                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 -z-10 bg-green-500  "
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}



                    </button>
                ))}
            </div>
        </div>
    );
}

export default TabUiMain
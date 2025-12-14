import {cn} from "../utils/css.ts";

import * as React from "react";

const AppButton = ({text, variant, icon, className}: {
    text: string,
    className?: string,
    icon?: React.ReactNode,
    variant: 'blue' | 'gray'
}) => {
    return (

        <div
            className={cn('flex items-center text-center px-3 py-2 rounded gap-2 transition-colors', className,
                variant === "blue" && 'bg-[#2563EB] text-white',
                variant === "gray" && 'bg-white text-[#374151] font-bold border border-[#D1D5DB]')}>
            {icon}
            {text}
        </div>
    );
};

export default AppButton;
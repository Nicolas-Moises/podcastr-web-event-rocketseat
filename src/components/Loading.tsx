import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="flex items-center gap-3 justify-center overflow-hidden">
            <CircleNotch weight="bold" className="animate-spin w-7 h-7" />
            <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            </h5>
        </div>
    )
}
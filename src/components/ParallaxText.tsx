import {useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap, motion} from "framer-motion";
import {useRef} from "react";
import {useAtom} from "jotai/index";
import {currentThemeAtom, themeAtom} from "../atoms/theme";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

export function ParallaxText({ children, baseVelocity }: ParallaxProps) {
    const [currentTheme] = useAtom(currentThemeAtom);
    const [theme, setTheme] = useAtom(themeAtom);
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });
    return (
        <div className="overflow-hidden whitespace-nowrap flex mt-6">
            <motion.div className={`font-bold ${currentTheme.text} text-4xl`} style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}
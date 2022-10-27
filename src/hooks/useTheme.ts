import { useEffect, useRef, useState } from 'react';
import { useStores } from './useStores';
import { colorsType } from '@/types';
const useTheme = () => {
    const { globalStore } = useStores();
    const [theme, setTheme] = useState<{
        primaryColor: string;
        errorColor: string;
        warningColor: string;
        successColor: string;
        infoColor: string;
    }>(globalStore.theme);
    const [light, setLight] = useState<'dark' | 'light'>(globalStore.light);
    const [flag, setFlag] = useState(false);
    const themeRef = useRef(theme);
    const lightRef = useRef(light);
    themeRef.current = theme;
    lightRef.current = light;
    useEffect(() => {
        setTheme(globalStore.theme);
        setLight(globalStore.light);
    }, [flag]);
    const changeTheme = (theme: colorsType) => {
        setTheme(theme);
        setFlag((i) => !i);
        globalStore.setTheme(theme);
    };
    const changLight = (sun: 'dark' | 'light') => {
        setLight(sun);
        setFlag((i) => !i);
        globalStore.setLight(sun);
    };
    return {
        theme: themeRef.current,
        light: lightRef.current,
        setTheme: changeTheme,
        setLight: changLight,
    };
};
export { useTheme };

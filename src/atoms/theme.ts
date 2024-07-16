import {atomWithStorage} from "jotai/utils";
import {atom} from 'jotai';
import {themes} from "../consts/theme";


export const themeAtom = atomWithStorage<'light' | 'dark'>('theme', 'dark')

export const currentThemeAtom = atom(themes.dark);
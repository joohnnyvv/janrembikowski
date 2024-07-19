import {useAtom} from "jotai/index";
import {currentThemeAtom} from "../atoms/theme";
import React, {useState} from "react";
import {FaTerminal} from "react-icons/fa";
import {commercialProjects} from "../consts/projects";
import {motion} from "framer-motion";
import {ReactTyped} from "react-typed";

const cliFiles = [{
    name: "project-description.txt",
    color: 'text-green-700'
}, {
    name: "responsibilites.txt",
    color: 'text-blue-700'
}, {
    name: "stack.txt",
    color: 'text-red-700'
}
]

const FileContent = (props: { fileIndex: number, projectIndex: number }): JSX.Element => {
    const [currentTheme] = useAtom(currentThemeAtom);

    if (props.fileIndex === 0) {
        return (
            <div>
                <p className={`${currentTheme.text}`}>{commercialProjects[props.projectIndex].description}</p>
            </div>
        )
    } else if (props.fileIndex === 1) {
        return (
            <ul>
                {
                    commercialProjects[props.projectIndex].responsibilities.map(responsibility => (
                        <li className={`${currentTheme.text}`} key={responsibility}>{`- ` + responsibility}</li>
                    ))
                }
            </ul>
        )
    } else {
        return (
            <ul>
                {
                    commercialProjects[props.projectIndex].stack.map(responsibility => (
                        <li className={`${currentTheme.text}`} key={responsibility}>{`- ` + responsibility}</li>
                    ))
                }
            </ul>
        )
    }
}

export function ProjectCard() {
    const [currentTheme] = useAtom(currentThemeAtom);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
    const [selectedFileIndex, setSelectedFileIndex] = useState(-1);

    return (
        <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: {duration: 2} }}
                    viewport={{ once: true }} className={`w-full h-96 border self-center mb-4 flex flex-col`}>
            <div className={`w-full flex justify-between px-6 py-3 border-b`}>
                <div className={`size-full flex gap-4`}>
                    <FaTerminal className={`${currentTheme.text}`} size={30}/>
                    <h1 className={`text-xl ${currentTheme.text}`}>commercial projects</h1>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 justify-between px-6 py-3 overflow-y-scroll">
                <p>
                    <ReactTyped
                        cursorChar="_"
                        startDelay={100}
                        strings={["> ~/Projects ls"]}
                        typeSpeed={40}
                    />
                </p>
                <div className="flex gap-5">
                    {commercialProjects.map((project, index) => (
                        <motion.p
                            key={index}
                            whileHover={{scale: 1.03}}
                            onClick={() => {
                                setSelectedProjectIndex((prev) => (prev !== index ? index : prev));
                                setSelectedFileIndex(-1);
                            }}
                            className="cursor-pointer"
                        >
                            {project.name}
                        </motion.p>
                    ))}
                </div>
                {selectedProjectIndex !== -1 && (
                    <div className="flex flex-col gap-2 mt-4">
                        <p>{`> ~/Projects cd ${commercialProjects[selectedProjectIndex].name}`}</p>
                        <p>{`> ~/Projects/${commercialProjects[selectedProjectIndex].name} ls`}</p>
                        <div className="flex gap-5">
                            {cliFiles.map((file, index) => (
                                <motion.p
                                    key={index}
                                    whileHover={{scale: 1.03}}
                                    onClick={() => {
                                        setSelectedFileIndex(index);
                                    }}
                                    className={`${file.color} cursor-pointer`}
                                >
                                    {file.name}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                )}
                {selectedFileIndex !== -1 && (
                    <>
                        <p>{`> ~/Projects/${commercialProjects[selectedProjectIndex].name} cat ${cliFiles[selectedFileIndex].name}`}</p>
                        <FileContent fileIndex={selectedFileIndex} projectIndex={selectedProjectIndex}/>
                    </>
                )}
            </div>
        </motion.div>
    )
}
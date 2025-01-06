import { motion } from "framer-motion"

export const WhatIUse = () => {
    return (
        <>
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                What I Use
            </motion.h1>
            <div className="relative">
                <div className="absolute top-[10%] left-[-8%] blur-[6px] z-[-1]">
                <motion.img
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
                    alt="late night programming gif"
                />
                </div>

                <div className="px-8 mb-20 pl-[30%]">
                    <div className="flex justify-between flex-wrap">
                        <motion.ul
                            initial={{ y: 48, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}
                            className="text-xl font-semibold list-disc mb-9"
                        >
                            <motion.div className="ml-[-20px] text-3xl underline">Web Development</motion.div>
                            <ListItem listItemText={"HTML"} />
                            <ListItem listItemText={"CSS"} />
                            <ListItem listItemText={"Tailwind CSS"} />
                            <ListItem listItemText={"Javascript"} />
                            <ListItem listItemText={"React JS"} />
                            <ListItem listItemText={"Typescript"} />
                            <ListItem listItemText={"React TS"} />
                        </motion.ul>
                        <motion.ul
                            initial={{ y: 48, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}
                            className="text-xl font-semibold list-disc mb-9"
                        >
                            <motion.div className="ml-[-20px] text-3xl underline">Backend Development</motion.div>
                            <ListItem listItemText={"Python"} />
                            <ListItem listItemText={"Javascript"} />
                            <ListItem listItemText={"C"} />
                            <ListItem listItemText={"C#"} />
                        </motion.ul>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <motion.ul
                            initial={{ y: 48, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}
                            className="text-xl font-semibold list-disc mb-9"
                        >
                            <motion.div className="ml-[-20px] text-3xl underline">Software Tools</motion.div>
                            <ListItem listItemText={"VSCode"}/>
                            <ListItem listItemText={"Eagle"} />
                            <ListItem listItemText={"Microsoft Office Suite"} />
                            <ListItem listItemText={"Github"} />
                        </motion.ul>
                        <motion.ul
                            initial={{ y: 48, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}
                            className="text-xl font-semibold list-disc pr-[220px] mb-9"
                        >
                            <motion.div className="ml-[-20px] text-3xl underline">Special</motion.div>
                            <ListItem listItemText={"Googling"}/>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </>
    );
};

const ListItem = ({listItemText}) => {
    return (
        <motion.li
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
            {listItemText}
        </motion.li>
    );
}
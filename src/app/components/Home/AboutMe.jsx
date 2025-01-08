import { TextScramble } from '@/components/core/text-scramble';
import { motion } from 'framer-motion';
import { ArrowRightIcon, Github, Linkedin, Mail } from 'lucide-react';


export function AboutMe() {

    return (
        <section className="mx-auto max-w-5xl h-[80vh] px-4 py-[20vh] text-[--foreground]">
            <div className='mx-auto max-w-5xl'>
                <TextScramble duration={2} className="font-extrabold md:text-8xl text-6xl pb-[3%]" >
                    Hi, I'm Jethro
                </TextScramble>
                <div className="flex flex-wrap">
                    <TextScramble duration={0.5} className="font-bold text-3xl pb-[3%] pr-2" >
                        I'm an
                    </TextScramble>
                    <TextScramble duration={1.5} className="font-bold text-3xl pb-[3%] text-blue-500" >
                        Aspiring Software Developer
                    </TextScramble>
                </div>
                <TextScramble duration={2} className="text-xl md:pr-[30%] pb-[3%]" >
                    A Fresh Electronic and Computer Engineering Graduate, passionate about computers and coding, a curious problem-solver with a love for exploring new technologies.
                    Always eager to learn and grow, wanting to create innovative and impactful solutions that contribute to society. 
                </TextScramble>
                <div className="flex">
                    <motion.span>My Links</motion.span>
                    <ArrowRightIcon className='mx-2'/> 
                    <motion.a href="https://www.github.com/Shockz132" className="mr-2"><Github /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/jethro-chia-64581233b/" className="mr-2"><Linkedin /></motion.a>
                    <motion.a href="https://www.gmail.com"><Mail /></motion.a>
                </div>
            </div>
            <motion.img 
                src="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.webp"
                width="50%"
                className="aspect-square min-w-[500px] max-w-[632px] absolute md:left-[45%] xl:top-[15%] top-[30%] z-[-1] blur-md"
            />
        </section>
    );
}
import React from 'react'

const aboutItems = [
    {
        label: 'Projects Completed',
        number: 6
    },
    {
        label: 'Years of Full Stack Development Experience',
        number: 4
    }
]

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome to my webpage! My name is Lim Lei, a professional dedicated 
                    Full Stack Developer. I am a recent graduate from the University of 
                    Toronto and I am primed and ready to join the workforce. I am a very 
                    dedicated and passionate individual, with great project experience to 
                    back up my expertise in the field. If you are interested, don't hesitate 
                    to reach out!
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({ label, number }, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <img 
                    src=""
                    alt="Logo"
                    width={30}
                    height={30}
                    className="ml-auto md:w-[40px] md:h-[40px]"
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

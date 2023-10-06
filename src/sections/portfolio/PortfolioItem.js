import { motion } from 'framer-motion';

const techSkills = [
    { imgSrc: 'react-logo.svg', techName: 'ReactJS' },
    { imgSrc: 'nodejs-logo.svg', techName: 'NodeJS' },
    { imgSrc: 'html5-logo.svg', techName: 'HTML5' },
    { imgSrc: 'firebase-logo.svg', techName: 'Firebase' },
    { imgSrc: 'expressjs-logo.svg', techName: 'ExpressJS' },
    { imgSrc: 'javascript-logo.svg', techName: 'JavaScript' },
    { imgSrc: 'css-logo.svg', techName: 'CSS3' },
    { imgSrc: 'python-logo.svg', techName: 'Python' },
    { imgSrc: 'jquery-logo.svg', techName: 'JQuery' },
    { imgSrc: 'mongoDB-logo.svg', techName: 'MongoDB' },
    { imgSrc: 'nextjs-logo.svg', techName: 'NextJS' },
    { imgSrc: 'typescript-logo.svg', techName: 'TypeScript' },
    { imgSrc: 'tailwind-logo.svg', techName: 'Tailwind CSS' },
];

const ssPath = '/res/images/screenshots/';

export default function PortfolioItem(props) {

    const isSourceLinkValid = !['', null, undefined].includes(props.sourceCodeLink);
    const isPreviewLinkValid = !['', null, undefined].includes(props.previewLink);
    const isNoticeValid = !['', null, undefined].includes(props.notice);

    const colorValue = {
        orange: '#CD5A07',
        red: '#E3031E'
    }

    const noticeColor = colorValue[props.noticeColor];

    const handleBtnClick = passedLink => {
        window.open(passedLink, '_blank');
    };

    return (
        <motion.div
            key={props.index}
            className={isNoticeValid ? 'portfolio-item glitching-portfolio' : 'portfolio-item'}
            style={{ animationDelay: props.i * 0.2 + 1 + 's', backdropFilter: !props.isMobile && 'blur(10px)' }}
        >
            <div className='portfolio-upper-container'>
                <div className='portfolio-img-container'
                    style={{
                        backgroundImage: `url(${ssPath + props.thumbnailFile})`,
                    }}
                >
                    <div className='cover' />
                </div>

                <div className='portfolio-name-container'>
                    <h3>{props.title}</h3>
                </div>
                <div className='portfolio-notice-container'>
                    {
                        isNoticeValid && <>
                            <h5 className='portfolio-notice'>Notice:</h5>
                            <p style={{
                                background: noticeColor,
                                borderRadius: '5px',
                                padding: '2px 5px',
                                color: 'white',
                                fontSize: '10px'
                            }} className='portfolio-notice'>{props.notice}</p>
                        </>
                    }
                </div>

                <div className='portfolio-details-container'>
                    <p>{props.details}</p>
                </div>
                <div className='portfolio-stack-container'>
                    {
                        props.techUsed.map(techIndex => {
                            return (
                                <PortfolioTechUsed src={techSkills[techIndex].imgSrc} name={techSkills[techIndex].techName} />
                            )
                        })
                    }
                </div>
            </div>


            <div className='portfolio-btns-container'>

                <button
                    className={!isSourceLinkValid && 'invalid-link'}
                    onClick={() => isSourceLinkValid && handleBtnClick(props.sourceCodeLink)}
                >
                    Source Code
                </button>

                <button
                    className={!isPreviewLinkValid && 'invalid-link'}
                    onClick={() => isPreviewLinkValid && handleBtnClick(props.previewLink)}
                >
                    Live Demo
                </button>

            </div>

        </motion.div >
    )
};

function PortfolioTechUsed({ src, name }) {

    return (
        <div
            className='tech-used'
        >
            <img src={'/res/images/svg/tech_stack/' + src} />
            <p >{name}</p>
        </div>
    )
}
import { BiSolidFileCss } from 'react-icons/bi';
import { FaDocker, FaGithub, FaJsSquare, FaReact } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { SiRedux, SiReduxsaga } from 'react-icons/si';
import { BsFillPlayFill } from 'react-icons/bs';

const Start = ({ validQuizzes, startQuiz, selectedQuiz, showStart }) => {
    const getIcon = (quiz) => {
        switch (quiz) {
            case 'React':
                return <FaReact />;
            case 'Docker':
                return <FaDocker />;
            case 'GitHub':
                return <FaGithub />;
            case 'CSS':
                return <BiSolidFileCss />;
            case 'Redux':
                return <SiRedux />;
            case 'ReduxSaga':
                return <SiReduxsaga />;
            case 'JavaScript':
                return <FaJsSquare />;
            case 'API':
                return <AiFillApi />;
            default:
                return <BsFillPlayFill />;
        }
    };

    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Select a Quiz</h1>
                        <div className="my-2">
                            {validQuizzes.map((quiz) => (
                                <button
                                    key={quiz}
                                    onClick={() => { startQuiz(quiz) }}
                                    className="btn px-4 py-2 bg-light text-dark fw-bold mx-2 my-2 align-items-center justify-content-center"
                                >
                                    {getIcon(quiz)}
                                    <span className="ms-2">{quiz}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
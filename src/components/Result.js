import React from 'react';

const Result = ({ showResult, quizs, marks, startOver, chooseQuiz }) => {
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > quizs.length * 5 / 2 ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className="mb-2 fw-bold">{marks > quizs.length * 5 / 2 ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className="mb-3 fw-bold">
                                Your score is {marks} out of {quizs.length * 5}
                            </h3>
                            <div className="d-flex align-items-center justify-content-center" >
                                <div className="col-md-6">
                                    <div className="d-flex flex-column align-items-center">
                                        <button onClick={startOver} className="btn py-2 px-4 btn-light fw-bold d-block mx-auto mb-3">
                                            Start Over
                                        </button>
                                        <button onClick={chooseQuiz} className="btn py-2 px-4 btn-light fw-bold d-block mx-auto">
                                            Choose Another Quiz
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
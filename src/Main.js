import React, { Component } from 'react';
import Card from './Card';



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
                {
                    src: "https://loremflickr.com/180/180/",
                    views: 1000,
                    likes: 300,
                    comments: 2
                },
            ]
        };
    }
    render() {
        const cardsToRender = this.state.cardData
                            .map((datum, index) => <Card src={datum.src}
                                likes={datum.likes}
                                views={datum.views}
                                comments={datum.comments}
                                key={index} />);
                                
        return (<main className="h-100 d-flex flex-column">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center align-items-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark font-weight-bold">
                            Popular <i className="fa fa-angle-down"></i></a>
                    </li>
                    <li className=" nav-item">
                        <a href="#" className="nav-link text-dark font-weight-bold">
                            Shots<i className="fa fa-angle-down"></i></a>
                    </li>
                    <li className=" nav-item">
                        <a href="#" className="nav-link text-dark font-weight-bold">
                            Now <i className="fa fa-angle-down"></i></a>
                    </li>
                </ul>
            </nav>
            <section className="project-grid flex-grow-1 p-4 d-flex flex-wrap justify-content-around">
                {cardsToRender}
            </section>
        </main>
        );
    }
}

export default Main;
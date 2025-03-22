import React, { useState } from "react";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";
import useSwr from "swr";
import ReactGa from "react-ga";

interface indexProps { }
// Removed unused Ireply interface

const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
};

const Index: React.FC<indexProps> = () => {
    const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
    const refScroll = React.useRef(null);

    React.useEffect(() => {
        if (!ReactGa.ga()) {
            ReactGa.initialize("UA-177100391-3", { debug: true });
        }
    }, []);

    function toggleBodyScroll(isToggleOpen: boolean) {
        setIsToggleOpen(!isToggleOpen);
    }

    return (
        <div data-scroll-container ref={refScroll} style={{
            overflowY: 'auto',
            height: '100vh',
            background: "linear-gradient(45deg, #10101A, #1A1A2A)",
            color: "#F2F2F2"
        }}>
            <Head>
                <title>Kalvium Squad 78 - Chitkara University</title>
                <meta name="description" content="Official page for Kalvium Squad 78 at Chitkara University" />
            </Head>

            <Navigation
                isOpen={isToggleOpen}
                toggleOpen={() => toggleBodyScroll(isToggleOpen)}
            />

            <main className="container">
                <header className="header">
                    <div className="header__hero">
                        <h1 className="header__hero--heading">
                            <span>Kalvium </span>
                            <span className="header__hero--heading-gradient">Squad 78</span>
                        </h1>
                        <p className="header__hero--subheading">
                            Chitkara University, Rajpura, Punjab
                        </p>
                    </div>
                </header>

                <section className="section-projects">
                    <div className="project-card">
                        <div className="project-card__content">
                            <h2>Campus Leadership</h2>
                            <div className="leadership-grid">
                                <div className="leader-card">
                                    <h3>Campus Managers</h3>
                                    <p>Khyati Sadana</p>
                                    <p>Kanchan</p>
                                </div>
                                <div className="leader-card">
                                    <h3>Campus Mentors</h3>
                                    <p>Manav</p>
                                    <p>Rohit</p>
                                    <p>Aparna</p>
                                    <p>Junaid</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-card__content">
                            <h2>Our Squad</h2>
                            <div className="squad-grid">
                                <div className="squad-member">
                                    <img src="webp/squad-member1.webp" alt="Squad member" />
                                    <p>Member Name 1</p>
                                </div>
                                {/* Add more squad members */}
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="site-footer">
                    <p>© 2023 Kalvium Squad 78 - Chitkara University</p>
                </footer>
            </main>

            <style jsx global>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .header__hero--heading {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .header__hero--heading-gradient {
          background: linear-gradient(45deg, #8000ff, #00ff88);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          margin: 2rem 0;
          backdrop-filter: blur(10px);
        }

        .leadership-grid, .squad-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .leader-card, .squad-member {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
        }

        .site-footer {
          text-align: center;
          padding: 2rem;
          margin-top: 4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
        </div>
    );
};

export default Index;
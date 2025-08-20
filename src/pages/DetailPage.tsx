import React, { useState } from "react";
import Layout from "./../components/Layout";
import DetailPage1Content from "./DetailPage1Content";
import DetailPage2Content from "./DetailPage2Content";
import "./../styles/DetailPage.css";

function DetailPage() {
    const [page, setPage] = useState<1 | 2>(1);

    return (
        <Layout>
            <h1>TypeScript 学習教材</h1>
            <div className="page-nav">
                <button
                    className={`nav-btn ${page === 1 ? "active" : ""}`}
                    onClick={() => setPage(1)}
                >
                    1
                </button>
                <button
                    className={`nav-btn ${page === 2 ? "active" : ""}`}
                    onClick={() => setPage(2)}
                >
                    2
                </button>
            </div>

            <div className="page-content">
                {page === 1 ? <DetailPage1Content /> : <DetailPage2Content />}
            </div>
        </Layout>
    );
}

export default DetailPage;

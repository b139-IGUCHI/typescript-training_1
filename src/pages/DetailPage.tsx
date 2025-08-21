import React, { useState } from "react";
import Layout from "./../components/Layout";
import DetailPage1Content from "./DetailPage1Content";
import DetailPage2Content from "./DetailPage2Content";
import DetailPage3Content from "./DetailPage3Content";
import DetailPage4Content from "./DetailPage4Content";
import "./../styles/DetailPage.css";

function DetailPage() {
    // ページ番号を 1 | 2 | 3 | 4 に拡張
    const [page, setPage] = useState<1 | 2 | 3 | 4>(1);

    return (
        <Layout>
            <h1 className="page-title">TypeScript 学習教材</h1>

            {/* ページ切替ボタン */}
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
                <button
                    className={`nav-btn ${page === 3 ? "active" : ""}`}
                    onClick={() => setPage(3)}
                >
                    3
                </button>
                <button
                    className={`nav-btn ${page === 4 ? "active" : ""}`}
                    onClick={() => setPage(4)}
                >
                    4
                </button>
            </div>

            {/* ページごとの内容 */}
            <div className="page-content">
                {page === 1 && <DetailPage1Content />}
                {page === 2 && <DetailPage2Content />}
                {page === 3 && <DetailPage3Content />}
                {page === 4 && <DetailPage4Content />}
            </div>
        </Layout>
    );
}

export default DetailPage;
